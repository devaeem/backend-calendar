const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const core = require('cors')
const connectDB = require("./config/db");
require('dotenv').config();

const { readdirSync } = require('fs')

const app = express()

connectDB()
app.use(morgan("dev"))
app.use(bodyParser.json({limit:"20mb"}))
app.use(core())
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.port || 8000 
app.listen(port,()=>console.log('Server is Running on port ' + port))