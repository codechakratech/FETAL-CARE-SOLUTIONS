const Dca = require('../Models/dcaTool')

exports.getDca = async (req,res)=>{
    try {
        const data = await Dca.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.getDcaOne = async (req,res)=>{
    try {
        const data = await Dca.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postDca = async (req,res)=>{
    try {
        const data = await Dca.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})        
    }
}


exports.putDca = async (req,res)=>{
    try {
        const data = await Dca.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                
    }
}

exports.deleteDca = async (req,res)=>{
    try {
        const data = await Dca.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                  
    }
}
