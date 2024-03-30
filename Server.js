const express=require('express');
const app=express();
app.get('/numbers/:numberid',(req,res)=>{
    const numberId = req.params.numberid;
    const numbers=[1,2,3,4,5];
    const average = numbers.reduce((acc,num)=>acc+num,0)/numbers.length;
    res.json({average});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('SERVER IS RUNNING ON PORT ${PORT}');
});