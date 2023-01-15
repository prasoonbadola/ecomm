const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const ProductCartSchmea = new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:"Product"
    },
    name: String,
    count: Number,
    price:Number,
})

const ProductCart = mongoose.model("ProductCart",ProductCartSchmea)


const orderSchema = new mongoose.Schema({
    products: [ProductCartSchmea],
    transction_id: {},
    amount:{type:Number},
    address:String,
    updated : Date,
    user: {
        type: ObjectId,
        ref:"User"
    }
},{timestamps:true});

const Order = mongoose.model("Orders",orderSchema);

module.exports = {ProductCart,Order}