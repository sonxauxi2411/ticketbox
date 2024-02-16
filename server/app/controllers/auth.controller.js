const {User} = require('../models/index')
const bcrypt = require('bcrypt');

exports.register = async (req, res) =>{
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password)
        // Băm mật khẩu trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Tạo người dùng mới trong cơ sở dữ liệu
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
