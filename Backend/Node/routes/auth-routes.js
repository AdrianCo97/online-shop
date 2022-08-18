import express from "express";
import User from "../models/User.js";
import { encryption } from "../encryption.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = await encryption(req.body.password);

  const foundUser = await User.findOne({ email: email });

  if (foundUser) {
    res.status(400).json({ error: "A user with that email already exists." });
  } else {
    try {
      const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });

      const savedUser = await newUser.save();

      res.status(200).json(savedUser);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Something went wrong with the registration." });
    }
  }
});

export default router;
