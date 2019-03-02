const express = require('express')
const app = express()
const mtg = require('mtgsdk')

app.get('/cards', (req, res, next) => {
  mtg.card.all({ name: req.query.name, pageSize: 1 })
  .on('data', card => {
    return res.json(card)
  })
})

app.get('*', (req, res) => {
  return res.json({
    health: 'OK'
  })
})


app.listen(3000, () => {
  console.log('Listening on 3000')
})

module.exports = app
