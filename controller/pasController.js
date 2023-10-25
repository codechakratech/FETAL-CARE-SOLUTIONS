const Pas = require('../Models/Pas')

exports.getPas = async (req,res)=>{
    try {
        const data = await Pas.find().populate('user')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
}

exports.getPasOne = async (req,res)=>{
    try {
        const data = await Pas.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postPas = async (req,res)=>{
    try {
        const data = await Pas.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})        
    }
}


exports.putPas = async (req,res)=>{
    try {
        const data = await Pas.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                
    }
}

exports.deletePas = async (req,res)=>{
    try {
        const data = await Pas.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                  
    }
}
