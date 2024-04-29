import { View, Text, Image } from "react-native";
import React from "react";
import styled, { css } from "@emotion/native";
import { colors } from "@/src/constants/Colors";
import CustomText from "@/src/common/CustomText";
import CustomButton from "@/src/common/CustomButton";

export default function ConfigScreen() {
  return (
    <Container>
      <UserInform>
        <Profile>
          <Image source={require("../../../assets/images/profile.png")} />
          <CustomButton>
            <CustomText style={ProfileText}>프로필 사진 변경</CustomText>
          </CustomButton>
        </Profile>
        <AchievementRate>
          <CustomText style={AchievementRateText}>
            누적 달성률 : 100%
          </CustomText>
          <CustomText style={AchievementRateText}>31/31</CustomText>
        </AchievementRate>
      </UserInform>
      <CustomText style={ScoreText}>현재 점수</CustomText>
      <ScoreInform>
        <View>
          <CustomText style={ScoreInformText}>
            누적 <ColorText color="#70E08F">상점</ColorText>:5
          </CustomText>
        </View>
        <Line />
        <View>
          <CustomText style={ScoreInformText}>
            누적 <ColorText color="#FF9190">벌점</ColorText>:5
          </CustomText>
        </View>
      </ScoreInform>
      <Poll>
        <CustomText style={DefaultText}>설문조사</CustomText>
      </Poll>
      <Logout>
        <CustomText style={DefaultText}>로그아웃</CustomText>
      </Logout>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;

const DefaultBox = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100px;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0px 0px 5px #00000029;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

const UserInform = styled(DefaultBox)`
  margin: 20px auto;
`;
const Poll = styled(DefaultBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`;
const Logout = styled(Poll)``;

const ScoreInform = styled(Poll)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Line = styled.View`
  display: flex;
  flex-direction: row;

  height: 80%;
  width: 1px;
  background-color: ${colors.GRAY};
`;
const ScoreInformText = css`
  font-size: 18px;
`;

const Profile = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
`;

const ProfileText = css`
  font-size: 12px;
  color: ${colors.GRAY};
`;

const AchievementRate = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const AchievementRateText = css`
  font-size: 18px;
  margin-bottom: 5px;
`;

const DefaultText = css`
  color: ${colors.BLACK};
  font-size: 18px;
`;

const ScoreText = css`
  font-size: 20px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const ColorText = styled.Text<{ color: string }>`
  color: ${(props) => props.color};
`;
