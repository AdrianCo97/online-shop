import express from 'express';
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async(req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    const email = req.params.email;
    const password = req.params.password;  

    try{
        const newUser = new User({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })

        const savedUser = await newUser.save();

        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(500).json(err.message);
    }
})

export default router;