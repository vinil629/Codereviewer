const express= require('express');
const aiRoutes=require("./routes/ai.routes")
const cors=require('cors')

const app=express();

app.use(express.json())



app.use(cors({
  origin: "https://codereviewer-g2um.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}))
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/ai',aiRoutes)



module.exports=app;