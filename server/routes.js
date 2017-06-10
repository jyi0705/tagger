const dbModel = require('./models')
const router = require('express').Router()

  router.get('/:userId', (req, res) => {
    dbModel.users.get(req.params.userId)
      .then(user => res.send(user))
      .catch(err => res.send(err))
  })

  router.get('/:userId/notes/:noteId', (req, res) => {
    console.log(req.params);
    dbModel.notes.getOne(req.params.userId, req.params.noteId)
      .then(user => res.send(user))
      .catch(err => res.send(err))
   })
  router.get('/:userId/notes', (req, res) => {
    dbModel.notes.getAll(req.params.userId)
      .then(user => res.send(user))
      .catch(err => res.send(err))
  })
  router.post('/notes', (req, res) => {
    dbModel.notes.post(req.body.userId, req.body.text)
      .then(user => res.send(user))
      .catch(err => res.send(err))
  })
  router.delete('/notes', (req, res) => {
    dbModel.notes.delete(req.body.id, req.body.isComplete)
      .then(user => res.send(user))
      .catch(err => res.send(err))
  })

module.exports = router;
