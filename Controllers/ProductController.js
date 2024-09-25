import Product from "../Models/Product_Schema.js";
import { errorHandler } from "../Utils/Error.js";

//create Product
export const  createProduct = async(req,res,next)=>{
    if(!req.body.title || !req.body.price || !req.body.image || !req.body.titledescription || !req.body.description){
        return next(errorHandler(400,"All the fields are required"));
    }
    const {title,price,image,category,titledescription,description} = req.body;
    const newProduct = new Product({title,price,image,category,titledescription,description})
    try{
        const savedProduct = await newProduct.save();
        res.status(201).json({message:"Product Created successfully",result:savedProduct});
    }
    catch(error){
        return next(errorHandler(500,"Internal Server in  create product Error"));
    }
}

//get All posts

export const getAllProduct = async(req,res,next)=>{
    try{
        const allproduct = await Product.find();
        res.status(200).json({result:allproduct});
    }
    catch(error){
        return next(error);
    }

}

// get product by Id

export const getProductById = async(req,res,next)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return next(errorHandler(404,"Product Not Found"));
        }
        res.status(200).json({result:product});
    }
    catch(error){
        return next(error);
    }
}

//search products
export const searchproducts = async (req, res, next) => {
    try {
      const { q } = req.query;
      const keys = ["title", "category"];
      const Products = await Product.find();
      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(q))
        );
      };
      q ? res.json(search(Products)) : res.json(Products);
    } catch (error) {
      return next(errorHandler(500, error.message));
    }
  };
