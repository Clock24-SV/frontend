"use client";

import classNames from "classnames/bind";
import style from "./index.module.scss";
import { signIn } from "next-auth/react";

const cx = classNames.bind(style);

const KakaoLoginButton = () => {
  return (
    <button className={cx("login-btn")} onClick={() => signIn("kakao", { callbackUrl: "/main" })}>
      카카오 로그인
    </button>
  );
};

export default KakaoLoginButton;
