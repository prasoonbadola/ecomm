const mongoose = require('mongoose');
const crypto = require('crypto');
const uuid = require('uuid/v1')

var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        maxlength:32,
        trim:true
    },
    lastname:{
        type: String,
        maxlength:32,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    userInfo:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        required:true,
        maxlength:10,
    },
    salt:String,
    role:{
        type:Number,
        default:0
    },
    purchases:{
        type:Array,
        default:[]
    }
},{timestamps:true});

userSchema.virtual('pass')
.set(function(pass) {
    this._pass = pass;;
    this.salt = uuid();
    this.password = this.securePasswrod(pass);
})
.get(function(){
    return this._pass;
})

userSchema.method = {

    authenticate:function (plainPassword) {
        return this.securePasswrod(plainPassword) === this.password;
    },
    securePasswrod: function(plainPassword){
        if(!password) return '';
        try {
            return crypto.createHmac('sha265',this.salt)
            .update(plainPassword)
            .digest('hex');
        } catch (error) {
            return '';
        }
    }
}

module.exports = mongoose.model("User",userSchema);