let express = require("express");
const { checkToken } = require("./middleware");
require("dotenv").config();
let app = express();
app.use(express.json());

// let myToken = "12345"
// let checkToken = (req,res,next)=>{
//     console.log(req.query.token)
//     if(req.query.token=="" || req.query.token==undefined){
//         return res.send({
//             status:0,
//             msg:"please fill the token"
//         })

//     }
//         if(req.query.token!= myToken){
//             return res.send({
//                 status:0,
//                 msg:"please fill the correct token"
//         })
//     }
//     next();
// }
// app.use(checkToken);

app.get("/",(req,res)=>{
    res.send({status:1, message:"home page api"})
})
app.get("/news",checkToken,(req,res)=>{
    res.send({status:1, message:"news api"})
})

app.post("/login",checkToken,(req,res)=>{
    console.log(req.body);
    res.send(
        {
            status:1, 
            message:"hello",
            data:req.body, 
            // data:req.query
        });
})

app.listen(process.env.port)//http://localhost:8000