//Step 1 : import module
const express = require('express')
const cors =    require('cors')



//Step 2:
const app = express()

//MiddleWare- Security Check
  app.use(cors())  //Enable The Cors Polciy 
app.use(express.json())

//Step 3 :
//Task Data Will Send To Backend Server
//Post Method


app.post('/login', (req,res)=>{


    const {name,email} = req.body  //frontend

    if(name && email){
        res.json({message : `Welcome To Webiste ${name}`} )
    }else{
        res.json({message : 'Email and Name Both are required'})
    }

})


app.listen(3000 , ()=>{
    console.log("Server Running at http://localhost:3000")
})



