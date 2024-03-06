const {UserModel} = require('../models/index')
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const responseHandler =  require('../handlers/response.handler')

const maxAge = 12 * 60 * 60;
exports.register = async (req, res) =>{
    try {
        const { username, email, password } = req.body;
       
        const checkEmail = await UserModel.findOne({email})
        if(checkEmail) return responseHandler.badrequest(res, 'Email already used')

        const checkUsername = await UserModel.findOne({username})
       if(checkUsername) return responseHandler.badrequest(res, 'Username already used')

        const hashedPassword = await bcrypt.hash(password, 10);

       const newUser = await UserModel.create({
          username,
          email,
          password: hashedPassword,
        });
        
        responseHandler.created(res, { user: newUser.toJSON()})
        // res.status(201).json({ message: 'User registered successfully', user: newUser.toJSON() });
      } catch (error) {
        console.error('Error registering user:', error);
        responseHandler.error(res);
      }
}

exports.login = async (req, res) =>{
    try {
        const { email, password , isAdminPage} = req.body;
        const user = await UserModel.findOne({email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
          return responseHandler.badrequest(res, "Wrong Email and Password")
        }
        if(isAdminPage && !user.isAdmin){
          return responseHandler.badrequest(res, "You are not admin")
        }
       
        const token = jsonwebtoken.sign({data : user}, process.env.JWT_KEY , {expiresIn: '24h'})
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        user.password = undefined;
        res.cookie('user', user.toJSON(), { httpOnly: true, maxAge: maxAge * 1000 });
        responseHandler.created(res, {user : user.toJSON() , token: token});
        // res.json({ message: 'Login successful', user: user.toJSON() , token : token });
      } catch (error) {
        console.error('Error logging in:', error);
        responseHandler.error(res);
      }
}