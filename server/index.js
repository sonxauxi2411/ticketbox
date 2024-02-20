const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//db
const sequelize = require('./app/config/db.config')
//models
const {User} = require('./app/models/index')

const app = express();
const port = 3000;

//app user
app.use(cookieParser())
app.use(express.json())
app.use( cors({
  origin: ['http://localhost:5173'],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}))
app.use(express.urlencoded({ extended: true}));

//router
const routes = require('./app/routes/index')
app.use('/api', routes)
app.use('/', (req, res) => {
  res.send('Hello World!');
});



sequelize.sync(
  // {force: true}
).then(()=>{

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  
}).catch((error) => {
  console.error('Error syncing Sequelize models: ', error);
});

