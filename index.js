const app=require("express")();
const {fork} = require("child_process");
app.get("/isprime",(req,res)=>{
    const childProcess= fork('./isprime.js');
    childProcess.send({"number":parseInt(req.query.number)})
    childProcess.on("messgae",message=>res.send(message))
})

 app.listen(8000,()=>console.log("listen on port 8000"))

