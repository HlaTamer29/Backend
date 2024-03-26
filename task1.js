const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.post("/user" , (req, res) => {
    res.json(sorting());
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function sorting(x) {
    var x = req.sort();
    return x
}

