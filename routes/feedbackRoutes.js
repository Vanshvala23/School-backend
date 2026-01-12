const express = require('express');
const router=express.Router();

const feedbackController=require('../controller/feedbackController');

router.post("/",feedbackController.createFeedback);
router.get("/",feedbackController.getFeedback);
router.get("/:id",feedbackController.getFeedbackById);

module.exports=router;