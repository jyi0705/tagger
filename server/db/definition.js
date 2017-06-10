const databaseConnection = require('./index');
const Sequelize = require('sequelize'); 

const User = databaseConnection.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  } 
})

const Note = databaseConnection.define('note', {
  text: {
    type: Sequelize.STRING(1234)
  },
  isComplete: {
    type: Sequelize.BOOLEAN
  } 
})

User.hasMany(Note, {as: 'notes'})

// User.sync({force: true}).then(() => {
//   return User.create({
//     firstName: 'Jonathan',
//     lastName: 'Yi'
//   })
// })
// User.sync().then(() => {
//   return User.create({
//     username: 'jyi1991',
//     password: '123',
//     firstName: 'Jonathan',
//     lastName: 'Yi'
//     })
// })

// Note.sync().then(() => {
//   return Note.create({
//           text: 'helloWorld',
//           isComplete: false,
//           userId: 1
//         })
// }).then(() => {
//     return Note.create({
//           text: 'goodbye world',
//           isComplete: false,
//           userId: 1
//         })
// })

User.sync()
Note.sync()

module.exports = {
  User: User,
  Note: Note
}