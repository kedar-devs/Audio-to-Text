const routes=require('express').Router()
const UserController=require('./../controller/User.controller.js')
routes.post('/register',UserController.register)
routes.post('/login',UserController.login)
routes.get('/text-file',UserController.textFile)
routes.post('/audio-file',UserController.audioFile)
module.exports=routes