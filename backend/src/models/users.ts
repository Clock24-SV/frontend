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

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nickname: String,
  profileImage: String,
  email: String,
});

export const UserModel = mongoose.model("User", UserSchema);
