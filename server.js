var express = require('express')

var app = express();
const HOST = process.env.HOST || "LOCAL";

app.get('/', (req, res) => {
    res.send(`Hello World from ! ${HOST}`)
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
    console.log("http://localhost:8080")
})