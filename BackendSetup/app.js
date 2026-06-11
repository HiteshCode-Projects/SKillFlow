//Backend File
//Step 1: Importing the required modules 
// By using-  require('module Name') method we can import the modules in our application
      
const express    =    require('express')
 



//Step 2 : Create an Express Application
// By using- express() method we can create an Express Application and store it in a variable called app
//Why? Bcz we need Build Apis and we need to use the methods of express module to build our APIs

 const app    =   express()

//Step 3 : Building APIs By using syntax 
// app.methodName('route-api address',  function)

app.get('/',(req,res)=>{

res.send('Hello Backend API Working')

})

app.get('/login' , (req,res)=>{

    res.send('Fill The Login Form')
})

app.post('/register',(req,res)=>{

    res.send('User Information Recieved Please Wait')

})


//Step 4 : Listen to the server
// By using- app.listen(portNumber, callbackFunction) method we can listen to the server on a specific port number and execute the callback function when the server is successfully started
//PortNumber - Address of Server on Internet

app.listen(3000 ,()=>{
    console.log("Server Running on http://localhost:3000")
})
