const dbDefinition = require('../db/definition');

module.exports = {

  users: {
    get: (id) => {
      return dbDefinition.User.find({
        where: {
          id: id
        }
      })
    },
    post: () => {}
  },
  notes: {
    getOne: (userId, id) => {
      return dbDefinition.Note.find({
        where: {
          userId: userId,
          id: id
        }
      })
    },
    getAll: (userId) => {
      return dbDefinition.Note.findAll({
        where: {
          userId: userId
        }
      })
    },
    post: (userId, text) => {
      return dbDefinition.Note.create({
        text: text,
        isComplete: false,
        userId: userId
      })
    },
    delete: (id, isComplete) => {
      return dbDefinition.Note.destroy({
        where: {
          $or: [{id: id}, {isComplete: true}]
        }

      })
    }
  }

}

  // users: {
  //   get:router.get('', (req, res) => {
  //     dbModel.users.get(req.body.username);
  //   })
  // },

  // notes: {
  //   get: router.get('', (req, res) => {
  //     dbModel.notes.get(req.body.userId)
  //   }),

  //   post: router.post('', (req, res) => {
  //     dbModel.notes.post(req.body.userId)
  //   }),

  //   delete: router.delete('', (req, res) => {
  //     dbModel.notes.delete(req.body.userId)
  //   })
  // }