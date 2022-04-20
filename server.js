const path = require('path')
const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'./client/build')))
    
    app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './', 'client', 'index.html')))
    app.get('*', (req, res) => res.sendStatus(404))
} else {
    app.get('/', (req, res) => res.send('Please set NODE_ENV to production and run the build command in client folder'))
}
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}`))