import express from 'express';

const router = express.Router();

router.post("/login", (req, res) => {
    const username = req.params.username;
    const password = req.params.password;  
})

export default router;