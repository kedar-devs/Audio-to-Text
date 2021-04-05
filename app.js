const express=require('express')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const app = express()
require('./mongoose')
app.use(express.json())
app.use(cors())
app.use(fileUpload())
module.exports=app
