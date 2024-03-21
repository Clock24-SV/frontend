import Link from "next/link";
import React from "react";
import classNamees from "classnames/bind";

const NotFound = () => {
  return (
    <div>
      <p>존재하지 않는 페이지입니다 !</p>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;
