const Events = require('../models/Events')


exports.CreateEvent = async (req,res) =>{
    try{
            console.log(req.body);
            
            res.send(await new Events(req.body).save()) 
    }catch(err){
            console.log("Server Error");
            res.status(500).send('Server Error')   
    }
}

exports.ListEvent = async (req,res) =>{
        try{
                console.log(req.body);
                
                res.send(await Events.find({})) 
        }catch(err){
                console.log("Server Error");
                res.status(500).send('Server Error')   
        }
    }