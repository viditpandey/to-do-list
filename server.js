const express = require('express')
const cors = require('cors')

const app = express()
// app.use(cors())

app.get('/api/list/:listId', cors(), (req, res) => {
  const data = [
    {text: `Snacks for ${req.params.listId}`, date: new Date()},
    {text: 'set up react router', date: new Date()},
    {text: 'set up DB connection for this app.', date: new Date()},
    {text: 'connect server and client.', date: new Date()}
  ]
  return res.json(data)
})

const port = 5001

app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})
