const express=require('express');
const mongoose=require('mongoose')
const app=express()
const path=require('path')
const mainRouter=require('./routes/index');
const PORT=process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.use('/',mainRouter)
const DB='mongodb+srv://Kirti:kirtikimongo@cluster0.ei4m1vq.mongodb.net/mydata?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>
    console.log(`no connection`));
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.listen(PORT,()=>
{
    console.log(`listen at port ${PORT}`)
})



