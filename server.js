const express=require('express');
const app=express();
const connectDB=require('./config/db');

connectDB();

app.use(express.json());

const feedbackRoute=require('./routes/feedbackRoute');
app.use('/api/feedback',feedbackRoute);

const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));