import mongoose, { Schema, model } from "mongoose";

// const userSchema = new Schema({
//   /**
//    * NextAuth.js 에서 제공되는 필드
//    */
//   name: String,
//   email: String,
//   emailVerified: Date,
//   image: String,
//   createdAt: { type: Date, required: true },
//   updatedAt: { type: Date, required: true },
// });

// export const User = model("User", userSchema);

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

export const User = mongoose.model("ADMIN2", UserSchema);
