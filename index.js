// #__MAIN__

const express = require('express')
const app = express();
const port = 8000

app.use(express.urlencoded({extended:true}))

require('./Database1/conn')

const user_model = require('./Database1/user_model')

app.set("view engine", "ejs")

app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/', async(req,res)=>{
    const data = new user_model(req.body)
    await data.save().then(()=>{
        console.log(' Success ');
    }).catch(()=>{
        console.log(' Nope ');
    })

    res.send("<h1><font color='#123def'  > YOUR DATA HAS BEEN SENT TO DATABASE ... VISIT AGAIN </font></h1>")
})

app.listen(port,()=>{
    console.log(' connected '+port+' ok ');
})