import express from "express";

const router = express.Router();

// router.post("/user", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).send(newUser);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

export default router;
