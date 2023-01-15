const Schmea = require('mongoose').Schema;
const model = require('mongoose').model;
const { ObjectId} = Schmea;

const productSchema = new Schmea({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        trim:true,
        maxlength:2000
    },
    price:{
        type:Number,
        required:true,
        maxlength:32
    },
    category:{
        cat_id : ObjectId,
        ref:"Category",
        required:true
    },
    stock:{
        type:Number
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true})

module.exports = model("Product",productSchema);