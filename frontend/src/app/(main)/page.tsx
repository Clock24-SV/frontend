import style from "./index.module.scss";
import logo from "../../assets/Images/logo.svg";
import classnames from "classnames/bind";
import KakaoLoginButton from "@/components/KakaoLoginButton";
import RImage from "@/common/RImage";

const cx = classnames.bind(style);

const Home = () => {
  return (
    <main className={cx("page")}>
      <RImage src={logo} alt="logo" width="32rem" height="26rem" />

      <h1 className={cx("title")}>Clock24</h1>

      <div className={cx("sub-wrapper")}>
        <span className={cx("sub")}>하루 24시간,</span>
        <span className={cx("sub")}>달성 실패 시 메시지가 전송돼요.</span>
      </div>

      <KakaoLoginButton />
    </main>
  );
};

export default Home;
