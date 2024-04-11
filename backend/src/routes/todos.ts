import express from "express";

const router = express.Router();

router.get("/todo", function (req, res) {
  res.send("Hello from todos");
});

export default router;
