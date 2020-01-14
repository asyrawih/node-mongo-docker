const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    nama : {
        type : String ,
        required : true  
    }, 
    alamat : {
        type : String ,
        required : true  
    }, 


    timeStamp : {
        type : Date , 
        default : Date.now() 
    }
})

module.exports = mongoose.model('Users' , UserSchema)