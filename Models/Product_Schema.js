import  mongoose from "mongoose";

const product_Schema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        default:""
    },
    category:{
        type:String,
        default:"unCategorized"
    } ,
    titledescription:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:50
    }
},{timestamps:true});
const Product = mongoose.model("Product",product_Schema);

export default Product;