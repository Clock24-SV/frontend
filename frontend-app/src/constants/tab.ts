export const TABLISTS = [
  { name: "index", title: "홈", icon: require("../assets/images/Home.png") },
  {
    name: "FriendSearch",
    title: "친구 찾기",
    icon: require("../assets/images/Search.png"),
  },
  {
    name: "FriendList",
    title: "친구 목록",
    icon: require("../assets/images/FriendAdd.png"),
  },
  {
    name: "Config",
    title: "환경설정",
    icon: require("../assets/images/Config.png"),
  },
] as const;

const title = ["홈", "친구 찾기", "친구 목록", "환경설정"] as const;

export type TitleType = (typeof title)[number];
