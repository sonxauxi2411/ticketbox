const express = require('express');
const session = require('express-session');
//db
const sequelize = require('./app/config/db.config')
//models
const {User} = require('./app/models/index')

const app = express();
const port = 3000;

//app user
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(session({
  secret: 'ticketbox-123', 
  resave: false,
  saveUninitialized: false,
}));

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

