const mongoose=require('mongoose')
const user_schema = new mongoose.Schema({
    fname:{type:String, required:true},
    email:{type:String, required:true},
    pass:{type:String, required:true}
})

const user_model = new mongoose.model('Sign',user_schema)
// user -> User     [ write like this ]
module.exports = user_model
