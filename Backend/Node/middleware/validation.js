import ShoppingCart from "../models/ShoppingCart.js";

export const doesAccountContainList = async (req, res, next) => {
    const foundShoppingList = await ShoppingCart.findOne({email: req.body.email, cartTitle: req.body.cartTitle})
    if(foundShoppingList){
        res.status(400).json({error: `This account already contains a shoppinglist with the name of ${foundShoppingList.cartTitle}`});
    }
    else{
        next();
    }  
}