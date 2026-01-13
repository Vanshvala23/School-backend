const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        mobile:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        subject:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        }
    },{timestamps:true}
);
module.exports=mongoose.model("Feedback",feedbackSchema);