import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectToDB } from "./db/mongoClient";
import users from "./routes/users";
import todos from "./routes/todos";
import login from "./routes/auth";
import auth from "./routes/auth";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/todos", todos);

connectToDB();

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
