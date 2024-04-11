"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import logo from "../../assets/Images/nav-logo.svg";
import config from "../../assets/Images/config.svg";
import styles from "./index.module.scss";
import RImage from "../RImage";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const cx = classNames.bind(styles);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cx("nav")}>
      <div className={cx("inner-nav")}>
        <div className={cx("logo")}>
          <RImage width="25rem" height="12rem" alt="logo" src={logo} />
        </div>

        <div className={cx("right-inner-nav")}>
          <button className={cx("find-button")}>친구 찾기</button>
          <div className={cx("config")}>
            <Image src={config} alt="config" fill />
          </div>
          <div className={cx("profile")}></div>
        </div>
        <GiHamburgerMenu
          onClick={() => setIsOpen((pre) => !pre)}
          className={cx("mobile-toggle-icon")}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div className={cx("sidebar-back")}>
              <motion.div
                className={cx("sidebar")}
                transition={{ type: "just", stiffness: 100 }}
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "100%" }}
              >
                <IoClose
                  onClick={() => setIsOpen((pre) => !pre)}
                  className={cx("close-sidebar")}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
