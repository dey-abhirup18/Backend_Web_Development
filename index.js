// requiire is a function which is used for getting certain availing the functions from installed packages 
// Here, a function is stored in the express variable
// Port is the end point of the server which is used for listening the server requests
// This is the virtual port   
// Here, the server is made
// env means enviroment variable

require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
     res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
     res.send('abhirup-dey18');
})

app.get('/login', (req, res) => {
     res.send('<h1>Please login at chai aur code</h1>')
})   

app.get('/youtube', (req, res) => {
     res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${port}`)
})