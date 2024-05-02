import { passport } from "passport";
import axios from "axios";
import express from "express";
import { UserModel } from "../models/users";

const header = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  Authorization: "Bearer ",
};

const router = express.Router();

router.post("/kakao", async (req, res, next) => {
  const { code } = req.body;

  try {
    const { accessToken } = await getKakaoToken(code);
    const userInfo = await getUserInfo(accessToken);

    console.log(userInfo);
    // 사용자 정보를 MongoDB에 저장
    const user = await UserModel.findOneAndUpdate(
      { email: userInfo.result.kakao_account.email },
      {
        nickname: userInfo.result.properties.nickname,
        profileImage: userInfo.result.properties.profile_image,
      },
      { upsert: true, new: true }
    );

    console.log(user);
    res.json({ accessToken, user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const getKakaoToken = async (code: string) => {
  const restApiKey = "8f2ff80563a40e39b73a7fa66c38628b";

  const response = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    `grant_type=authorization_code&client_id=${restApiKey}&code=${code}`
  );

  // 발급받은 access token 반환
  return { accessToken: response.data.access_token };
};

const getUserInfo = async (accessToken: string) => {
  header.Authorization += accessToken;

  const get = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: header,
  });
  const result = get.data;

  return { result };
};

export default router;
