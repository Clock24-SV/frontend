import axios from "axios";
import { header } from "../constants/auth";

export const getKakaoToken = async (code: string) => {
  const restApiKey = process.env.REST_API_KEY;

  const response = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    `grant_type=authorization_code&client_id=${restApiKey}&code=${code}`
  );

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
};

export const getUserInfo = async (accessToken: string) => {
  header.Authorization += accessToken;

  const get = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: header,
  });
  const result = get.data;

  return { result };
};

export const refreshAccessToken = async (refreshToken: string) => {
  const restApiKey = process.env.REST_API_KEY;
  const redirectUri = process.env.REDIRECT_URL; // 사용자 앱 설정에 등록된 Redirect URI 입력 필요

  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      `grant_type=refresh_token&client_id=${restApiKey}&refresh_token=${refreshToken}&redirect_uri=${redirectUri}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );

    // 새로운 access token과 refresh token 반환
    return {
      newAccessToken: response.data.access_token,
    };
  } catch (error) {
    console.error("Error refreshing token:", error.response.data);
    return null;
  }
};
