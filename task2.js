const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.get("/user/isEven/:id", (req, res) => {
    res.json(check(req.params.id));
})
app.get("/user/isOdd/:id", (req, res) => {
    res.json(check2(req.params.id));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function check(x) {
    if (x % 2) {
        return false
    }
    else {
        return true
    }
}
function check2(x) {
    if (x % 2) {
        return true
    }
    else {
        return false
    }
}


