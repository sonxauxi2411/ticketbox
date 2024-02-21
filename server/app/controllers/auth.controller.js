const {User} = require('../models/index')
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const responseHandler =  require('../handlers/response.handler')

const maxAge = 12 * 60 * 60;
exports.register = async (req, res) =>{
    try {
        const { username, email, password } = req.body;
       
        const checkEmail = await User.findOne({email})
        if(checkEmail) return responseHandler.badrequest(res, 'Email already used')

        const checkUsername = await User.findOne({username})
       if(checkUsername) return responseHandler.badrequest(res, 'Username already used')

        const hashedPassword = await bcrypt.hash(password, 10);

       const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });
        
        responseHandler.created(res, {token, user: newUser.toJSON()})
        // res.status(201).json({ message: 'User registered successfully', user: newUser.toJSON() });
      } catch (error) {
        console.error('Error registering user:', error);
        responseHandler.error(res);
      }
}

exports.login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
          return responseHandler.badrequest(res, "Wrong Email and Password")
        }
        const token = jsonwebtoken.sign({data : user.id}, 'ticketbox-secret' , {expiresIn: '24h'})
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        user.password = undefined;
        responseHandler.created(res, {user : user.toJSON() , token: token});
        // res.json({ message: 'Login successful', user: user.toJSON() , token : token });
      } catch (error) {
        console.error('Error logging in:', error);
        responseHandler.error(res);
      }
}