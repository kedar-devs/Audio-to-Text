const User=require('./../models/user.model.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
var CloudmersiveConvertApiClient = require('cloudmersive-speech-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;
const path=require('path')
const fs=require('fs')
exports.register=async(req,res)=>{
    if(req.body==null){
        res.status(400).send({err:'Bad request',message:"body missing"})
    }
    else{
        const user=await User.find({email:req.body.email})
        if(user){
            res.status(401).send('User already Exists')
        }
        else{
            const emailRegex=/@gmail.com|@yahoo.com|hotmail.com|@numadic.com/
            const PasswordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    
            if(!emailRegex.test(email) || email==null) throw 'Email id is not supported, try gmail,yahoo or hotmail.com'
            
            if(password.length<8) throw 'Password Provided is too short, password should be atleast 8 characters long'
            if(!PasswordRegex.test(password)) throw 'Password Provided is not Strong Enough pls re-Enter Your Password'
            bcrypt.genSalt(10, function(err, salt) {
                if(err){
                    console.log(err)
                }
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    req.body.password=hash
                });
            });
            const {user,password,email}=req.body
            const audioLink=' '
            const newUser=new User({user,password,email,audioLink})
            newUser.save()
            .then(result=>{
                let payload={id:result._id}
                let token=jwt.sign(payload,process.env.SECRET_KEY)
                res.status(200).send({token})
            })
            .catch(err=>{
                console.log(err.message)
                res.status(401).send({err})
            })
        }

    }

}
exports.login=async(req,res)=>{
    if(req.body==null){
        res.send({err:"bad request",message:"Empty body send"})
    }
    const {email,password}=req.body
    const user=await User.find({email})
    if(!user){
        res.status(401).send("Register First")
    }   
    else{
        bcrypt.compare(password,user.password,(err,result)=>{
            if(err){
                console.log(err.message)
                res.status(401).send("password didnt match up")
                
            }
            if(result){
                let payload={id:user._id}
                let Token=jwt.sign(payload,process.env.SECRET_KEY)
                res.status(200).send({Token})
            }
        })
    }

}
exports.audioFile=async(req,res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      let sampleFile;
      let uploadPath;
      sampleFile = req.files.sampleFile;
      uploadPath = path.join(__dirname + './../Uploads' + sampleFile.name);
      await sampleFile.mv(uploadPath, function(err) {
        if (err)
          return res.status(500).send(err);
        
        const user=await User.findOne({_id:req.body.id})
        user.audioLink=uploadPath
        await user.save
        res.status(200).send('File uploaded!');       
      });
}
exports.textFile=async(req,res)=>{
    const user=await User.findOne(req.body.id)
    const place='./Uploads/text.txt'
    if(!user){
        return res.status(400).send({err:"Bad Message",message:""})
    }
    var Apikey = defaultClient.authentications['Apikey'];
    Apikey.apiKey = 'YOUR API KEY';
    var speechFile = await Buffer.from(fs.readFileSync().buffer);
    var callback = function(error, data, response) {
        if (error) {
          console.error(error);
        } else {
          console.log('API called successfully. Returned data: ' + data);
          const data=await fs.writeFileSync(place,data)
          return res.status(200).send({place})
          

        }
      };
      apiInstance.recognizeFile(speechFile, callback);
}