const {User} = require('../models/index')
const bcrypt = require('bcrypt');

exports.register = async (req, res) =>{
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password)
        const hashedPassword = await bcrypt.hash(password, 10);

       const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });
    
        res.status(201).json({ message: 'User registered successfully', user: newUser.toJSON() });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

exports.login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
    
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        req.session.userId = user.id; // Lưu userId vào session
        res.json({ message: 'Login successful', user: user.toJSON() });
      } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}