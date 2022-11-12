const express = require('express')
const app = express()
const router = require('./RouterJs.js')

const cors = require('cors')


app.use(cors())
app.use(router)
app.listen(8001,function(){
    console.log("serve running http://localhost:8001");
})