const Pre = require('../Models/pre-eclampsia')

exports.getPre = async (req,res)=>{
    try {
        const data = await Pre.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postPre = async (req,res)=>{
    try {
        const data = await Pre.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})        
    }
}


exports.putPre = async (req,res)=>{
    try {
        const data = await Pre.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                
    }
}

exports.deletePre = async (req,res)=>{
    try {
        const data = await Pre.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})                  
    }
}
