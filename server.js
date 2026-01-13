const express=require('express');
const app=express();
const connectDB=require('./config/db');
const cors = require("cors")

connectDB();
const cors = require("cors");

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://your-frontend-domain.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

app.use("/api/feedback",require("./routes/feedbackRoutes"));

const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));