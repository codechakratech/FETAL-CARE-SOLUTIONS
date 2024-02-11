const User = require('../Models/user')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')

exports.getUser = async (req,res)=>{
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.register = async (req,res)=>{
    try {
        const userExists = await User.findOne({email:req.body.email})
        if(userExists) return res.status(400).json({errors:true,message:'user already exists'})

        const sault = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password,sault)

        const data = await User.create(req.body)
         const token = await jwt.sign({id:data._id},process.env.SEC)
        return res.json({errors:false,data:{user:data,token:token}})
      

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})        
    }
}

exports.login = async (req,res)=>{
    try {
        const userExists = await User.findOne({email:req.body.email})
        if(!userExists) return res.status(400).json({errors:true,message:'email or password invalid'})

        const passwordMatch = await bcrypt.compare(req.body.password,userExists.password)
        if(!passwordMatch) return res.status(400).json({errors:true,message:'email or password invald'})

        const token = await jwt.sign({id:userExists._id},process.env.SEC)
        return res.json({errors:false,data:{user:userExists,token:token}})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                
    }
}

exports.putUserPassword = async (req,res)=>{
    try {
        const userExists = await User.findOne({email:req.body.email})
        if(!userExists) return res.status(400).json({errors:true,message:'email or password invalid'})
        
         const sault = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password,sault)
        
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                
    }
}

exports.putUser = async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                  
    }
}
