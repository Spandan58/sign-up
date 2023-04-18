const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/registration')
.then(()=>{
    console.log(' Connection to DataBase Established ');
})
.catch(()=>{
    console.log(' Something Went Wrong ');
})