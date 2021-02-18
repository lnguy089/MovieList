const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('Hello World!');
// })


app.get('/api/movies', (req, res) => {
  res.send('Hello World!!');
})
app.use(express.json());

app.post('/api/movies', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

