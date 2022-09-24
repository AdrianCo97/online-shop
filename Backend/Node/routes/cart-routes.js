import express from 'express';
import ShoppingCart from "../models/ShoppingCart.js";
import { doesAccountContainList } from '../middleware/validation.js';
const router = express.Router();

router.post("/savecart", doesAccountContainList, async(req, res) => {
    const email = req.body.email;
    const cartTitle = req.body.cartTitle;
    const products = req.body.products;
    try{
        const newShoppingCart = new ShoppingCart({
            email: email,
            cartTitle: cartTitle,
            products: products
        })

        const savedShoppingCart = await newShoppingCart.save();

        res.status(200).json(savedShoppingCart)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

export default router;