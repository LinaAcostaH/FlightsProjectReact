const PORT = 8000
const axios = require('axios').default
const express = require('express')
require('dotenv').config()
const cors=require('cors')
const app = express()
app.use(cors());

app.get('/arrivals', (req, res) => {
    const options = {
        url: process.env.URL_ARRIVALS,
        headers: {
            accept: 'application/json',
            'X-Cassandra-Token': process.env.TOKEN
        }
    }
    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })
})

app.get('/departures', (req, res) => {
    const options = {
        url: process.env.URL_DEPARTURES,
        headers: {
            accept: 'application/json',
            'X-Cassandra-Token': process.env.TOKEN
        }
    }
    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })
})

app.listen(PORT, () => console.log('running on port ' + PORT))