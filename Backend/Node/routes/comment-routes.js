import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

router.post("/comments", async (req, res) => {
    const productId = req.body.productId;
    const email = req.body.email;
    const firstname = req.body.firstname;
    const comment = req.body.comment;

    try{
        const newComment = new Comment({
            productId: productId,
            byUser: {email: email, firstname: firstname},
            comment: comment
        })

        const savedComment = await newComment.save();

        res.status(200).json(savedComment);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});
