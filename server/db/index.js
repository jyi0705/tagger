// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.
const Sequelize = require('sequelize'); 

const databaseConnection = new Sequelize('taggerDatabase', 'root', 'deerparkwater',{
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

})

databaseConnection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully')
  })
  .catch(err => {
    console.error('Unable to connect to the database', err) 
  })

module.exports = databaseConnection;


// User.sync({force: true}).then(() => {
//   return User.create({
//     firstName: 'Jonathan',
//     lastName: 'Yi'
//   })
// })

// User.destroy({
//   where: {
//     firstName: 'Jonathan'
//   }
// })