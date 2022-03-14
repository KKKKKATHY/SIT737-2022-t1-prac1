const express = require("express")
const config = require('./config')


const port = 8080
const serverLog = config.log.serverLog

const app = express()

// middleware
app.use(express.json())

// request path
app.get('/', (req, res) => {
    serverLog('\'/\' requested')
    res.send(`<h>Hello from Kathy's Server</h>`)
})


app.listen(port, () => {
    serverLog(`server started and listening on port: ${port}`)
})