import express from "express";
import { createProduct, getAllProduct,getProductById,searchproducts  } from "../Controllers/ProductController.js";

const router = express.Router();

router.post('/createproduct',createProduct);
router.get('/getallproduct',getAllProduct);
router.get('/getproductbyid/:id',getProductById );
router.get('/searchproduct',searchproducts);
export default router;