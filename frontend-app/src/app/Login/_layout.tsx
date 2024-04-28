import React from "react";
import CustomText from "@/src/common/CustomText";
import styled, { css } from "@emotion/native";
import { Image, View } from "react-native";
import CustomButton from "@/src/common/CustomButton";
import { colors } from "@/src/constants/Colors";

function _layout() {
  return (
    <Container>
      <View>
        <CustomText style={LogoText}>Clock24</CustomText>
        <Image source={require("@/src/assets/images/logo.png")} />
        <CustomText style={SubText}>
          {"하루 24시간, \n달성 실패 시 누군가에게 메시지가 전송돼요"}
        </CustomText>
      </View>

      <SubContainer>
        <CustomButton style={KakaoLoginButton}>
          <CustomText>카카오 로그인</CustomText>
        </CustomButton>
      </SubContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
`;

const SubContainer = styled.View`
  position: absolute;
  bottom: 60px;
`;

const LogoText = css`
  padding: 20px;
  color: ${colors.BLUE};
  font-size: 40px;
  text-align: center;
`;

const SubText = css`
  padding: 30px 0;
  text-align: center;
  font-size: 16px;
  color: ${colors.BLACK};
`;

const KakaoLoginButton = css`
  border-radius: 10px;
  background-color: #fee500;
  padding: 10px 40px;
  font-size: 20px;
`;

export default _layout;
