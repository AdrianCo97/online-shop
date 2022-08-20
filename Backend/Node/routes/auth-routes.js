import express from "express";
import User from "../models/User.js";
import { encryption } from "../encryption.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../middleware/authenticateToken.js";

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
        .status(400)
        .json({ message: "Something went wrong with the registration." });
    }
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const foundUser = await User.findOne({ email: email });

  if (foundUser) {
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (validPassword) {
      const accessToken = jwt.sign(
        foundUser.toJSON(),
        process.env.ACCESS_TOKEN
      );
      res
        .status(200)
        .json({
          user: {
            firstname: foundUser.firstname,
            lastname: foundUser.lastname,
            email: foundUser.email,
          },
          accessToken: accessToken,
        });
    }
    else{
      res.status(400).json({error: "Either the email or password is incorrect. Try again!"})
    }
  } else {
    res
      .status(400)
      .json({ error: "No user with that email address was found." });
  }
});

export default router;
