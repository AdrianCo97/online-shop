import express from 'express';
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async(req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;  

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