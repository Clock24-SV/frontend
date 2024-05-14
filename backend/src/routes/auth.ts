import express from "express";
import { UserModel } from "../models/users";
import { getKakaoToken, getUserInfo, refreshAccessToken } from "../utils/auth";

const router = express.Router();

router.post("/kakao", async (req, res, next) => {
  const { code } = req.body;
  try {
    const { accessToken, refreshToken } = await getKakaoToken(code);
    const userInfo = await getUserInfo(accessToken);

    // 사용자 정보를 MongoDB에 저장
    const user = await UserModel.findOneAndUpdate(
      { email: userInfo.result.kakao_account.email },
      {
        nickname: userInfo.result.properties.nickname,
        profileImage: userInfo.result.properties.profile_image,
      },
      { upsert: true, new: true }
    );
    return res.json({
      accessToken,
      refreshToken,
      id: user.id,
      profileImage: user.profileImage,
      nickname: user.nickname,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/refresh", async (req, res, next) => {
  const { refreshToken } = req.body;
  try {
    const { newAccessToken } = await refreshAccessToken(refreshToken);
    return res.json({ newAccessToken });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
