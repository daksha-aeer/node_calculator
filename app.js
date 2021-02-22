const express = require('express')

const app = express()

app.get('/add', (req, res) => {
    const a  = Number(req.query.a)
    const b  = Number(req.query.b)
    const c = a+b
    console.log('a',a)
    console.log('b',b)
    res.send('sum is ' + c)
})

app.get('/sub', (req, res) => {
    const a  = Number(req.query.a)
    const b  = Number(req.query.b)
    const c = a-b
    console.log('a',a)
    console.log('b',b)
    res.send('difference is ' + c)
})

app.get('/mul', (req, res) => {
    const a  = Number(req.query.a)
    const b  = Number(req.query.b)
    const c = a*b
    console.log('a',a)
    console.log('b',b)
    res.send('product is ' + c)
})

app.get('/div', (req, res) => {
    const a  = Number(req.query.a)
    const b  = Number(req.query.b)
    const c = a/b
    console.log('a',a)
    console.log('b',b)
    res.send('divident is ' + c)
})

const PORT = process.env.PORT | 5000
app.listen(PORT, () => {
    console.log('Started')
})