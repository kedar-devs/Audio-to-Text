const mongoose=require('mongoose')
const url=process.env.MONGODB_URL
mongoose.connect(url,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
const connection=mongoose.connection
connection.once('open',()=>{
    console.log("Connection Established succesfully")
})