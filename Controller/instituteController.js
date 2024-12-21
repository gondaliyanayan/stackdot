const institute= require("../Models/institute");

//create a institude api for the administration
exports.createInstitute = async(req,res)=>{
    try {
        const checkInstite = await institute.find({name:req.body.name});

        if(checkInstite.length > 0){
            return res.status(200).json("Pls give another name of insttude");
        }
        //this is create institude with unique name
        const institude = new institute({
            institute:req.body.institute,   
            name:req.body.name
        })

        const inst = institude.save();
        return res.status(200).json({status:true,
            message:"Institute created successfully",
            institude:institude});
    } catch (error) {
        console.error(error);
    }
};

//update institute 
exports.updateInstitude= async(req,res)=>{
    try {
        const checkInstite = await institute.findById(req.params.id);
        if(!checkInstite){
            return res.status(200).json("Please provide valid id of the institute");
        }
        //By id we have update institute data
        const institude = await institute.findByIdAndUpdate(req.params.id,
            {institute:req.body.institute, name:req.body.name},{new:true});

        return res.status(200).json({status:true,
            message:"Institute updated successfully",
            institude:institude});
    } catch (error) {
        console.error(error);
    }
};


//delete institude
exports.deleteInstitude= async(req,res)=>{
    try {
        const checkInstite = await institute.findById(req.params.id);
        if(!checkInstite){
            return res.status(200).json("Please provide valid id of the institute");
        }
        //By id we have update institute data
        const institude = await institute.findByIdAndUpdate(req.params.id,
            {isDeleted: true});
            
        return res.status(200).json({status:true,
            message:"Institute deleted successfully",
            institude:institude});
    } catch (error) {
        console.error(error);
    }
};

//get institute
exports.getInstitude= async(req,res)=>{
    try {
        const checkInstite = await institute.find({isDeleted:false});
        if(checkInstite.length <= 0) {
            return res.status(200).json("There is no institude created");
        }
        return res.status(200).json({status:true,
            message:"Institute data get successfully",
            institude:checkInstite});
    } catch (error) {
        console.error(error);
    }
};

