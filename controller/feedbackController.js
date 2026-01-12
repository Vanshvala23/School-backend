const Feedback=require('../models/feedbackModel');

exports.createFeedback=async(req,res)=>{
    try{
        const {name,email,message}=req.body;
        if(!name||!email||!message){
            res.status(400).json({message:'Please fill all fields'});
        }
        const feedback=new Feedback({
            name,
            email,
            message
        });
        await feedback.save();
        res.status(201).json({message:'Feedback submitted successfully'
        });
    }catch(error){
        res.status(500).json({message:'Error submitting feedback',error});
    }
};