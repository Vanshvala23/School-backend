const express=require('express');
const app=express();
const connectDB=require('./config/db');

connectDB();

app.use(express.json());

app.use("/api/feedback",require("./routes/feedbackRoutes"));

const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));