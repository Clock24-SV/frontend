import styled, { css } from "@emotion/native";
import CustomText from "@/src/common/CustomText";
import { colors } from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import useTodo from "@/src/hooks/useTodo";
import { STATES, TodoType } from "@/src/types/todo";
import { Dropdown } from "react-native-element-dropdown";
import { STATUS_INFO } from "@/src/constants/State";
import CustomButton from "@/src/common/CustomButton";

interface TodoItemProps {
  item: TodoType;
}

export default function TodoItem({ item }: TodoItemProps) {
  const { handleDropdownChange } = useTodo();

  let stateList = STATES.filter((state) => state !== item.state);
  let data = stateList.map((state) => ({
    value: state,
    label: STATUS_INFO[state].text,
    colors: STATUS_INFO[state].color,
  }));

  return (
    <Container>
      <ItemContainer>
        <Section>
          <CustomButton
            style={[DropdownContainer, { backgroundColor: STATUS_INFO[item.state].color }]}
          >
            <Dropdown
              style={DropdownBox}
              data={data}
              labelField="label"
              valueField="value"
              placeholder={!item.state ? "Select item" : STATUS_INFO[item.state].text}
              placeholderStyle={{ color: colors.WHITE }}
              value={item.state}
              onChange={(selectedItem) => {
                handleDropdownChange(item.id, selectedItem.value);
              }}
              containerStyle={DropdownListContainer}
              renderItem={(item) => (
                <ItemText>
                  <CustomText style={{ color: `${STATUS_INFO[item.value].color}` }}>
                    {STATUS_INFO[item.value].text}
                  </CustomText>
                </ItemText>
              )}
              selectedTextStyle={{ color: colors.WHITE }}
              iconColor="white"
              fontFamily="Jua"
            />
          </CustomButton>

          <CustomText style={Content}>{item.content}</CustomText>
        </Section>

        <Section>
          <TouchableOpacity onPress={() => console.log(item.id)}>
            <Ionicons name="close" size={20} color="black" />
          </TouchableOpacity>
        </Section>
      </ItemContainer>
    </Container>
  );
}

const Container = styled.View`
  padding: 4px 2px;
`;

const ItemContainer = styled.View`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 0 10px;

  border-radius: 10px;
  background-color: ${colors.WHITE};

  shadow-color: #000;
  shadow-offset: 1px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 1; // Android
`;

const Section = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Content = css`
  padding-left: 10px;
  font-size: 16px;
`;

const DropdownContainer = css`
  width: 80px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: 10px;

  font-family: "Jua";
`;

const DropdownListContainer = css`
  width: 80px;
  min-height: 40px;

  border-radius: 10px;
  background-color: ${colors.WHITE};
`;

const DropdownBox = css`
  width: 100%;
  height: 100%;

  padding: 0 6px;
`;

const ItemText = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0;
`;
