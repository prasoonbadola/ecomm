const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const categorySchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    }
},{timestamps:true})

module.exports =  model("Category",categorySchema);