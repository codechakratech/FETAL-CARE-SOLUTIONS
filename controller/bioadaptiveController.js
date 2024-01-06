const Bioadaptive = require('../Models/bioadaptive')

exports.getBioadaptive = async (req,res)=>{
    try {
        const data = await Bioadaptive.find().populate('user')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
}

exports.getBioadaptiveOne = async (req,res)=>{
    try {
        const data = await Bioadaptive.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postBioadaptive = async (req,res)=>{
    try {
        const data = await Bioadaptive.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})        
    }
}


exports.putBioadaptive = async (req,res)=>{
    try {
        const data = await Bioadaptive.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                
    }
}

exports.deleteBioadaptive = async (req,res)=>{
    try {
        const data = await Bioadaptive.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                  
    }
}
