import React from "react";
import classNames from "classnames/bind";
import logo from "../../assets/Images/nav-logo.svg";
import config from "../../assets/Images/config.svg";
import styles from "./index.module.scss";
import RImage from "../RImage";
import Image from "next/image";

const cx = classNames.bind(styles);

const Nav = () => {
  return (
    <nav className={cx("nav")}>
      <div className={cx("inner-nav")}>
        <RImage
          width="25rem"
          height="12rem"
          alt="logo"
          src={logo}
          left="20px"
        />
        <div className={cx("right-inner-nav")}>
          <button className={cx("find-button")}>친구 찾기</button>
          <div className={cx("config")}>
            <Image src={config} alt="config" fill />
          </div>
          <div className={cx("profile")}></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
