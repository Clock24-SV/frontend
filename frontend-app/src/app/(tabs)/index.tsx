import React from "react";
import styled from "@emotion/native";
import { CalendarProvider, ExpandableCalendar, LocaleConfig } from "react-native-calendars";
import { calender } from "@/src/constants/Calendar";
import Todo from "@/src/components/Todo";
import { colors } from "@/src/constants/Colors";
import Timer from "@/src/components/Timer";
import useTodo from "@/src/hooks/useTodo";

LocaleConfig.locales["kr"] = {
  monthNames: calender.monthNames,
  dayNames: calender.dayNames,
  dayNamesShort: calender.dayNamesShort,
  today: calender.today,
};
LocaleConfig.defaultLocale = "kr";

export default function HomeScreen() {
  const { todoList, markedDates, selectedDay, setSelectedDay, subtractWeek, addWeek } = useTodo();

  return (
    <Container>
      <CalendarProvider date={selectedDay}>
        <ExpandableCalendar
          // date={selectedDay}
          monthFormat={calender.monthFormat}
          disablePan
          markedDates={markedDates}
          theme={{
            // arrow
            arrowColor: "#8376F4",
            // dot
            dotColor: "#8376F4",
            // month
            textMonthFontWeight: "600",
            textMonthFontSize: 16,
            // day names
            textSectionTitleColor: "#B3B3B3",
            textDayHeaderFontWeight: "500",
            // selected date
            selectedDayBackgroundColor: "#8376F4",
            // dates
            todayTextColor: "#8376F4",
            textDayFontWeight: "500",
          }}
          firstDay={1}
          onDayPress={(date) => {
            setSelectedDay(date.dateString);
          }}
          onPressArrowLeft={subtractWeek}
          onPressArrowRight={addWeek}
        />

        <Layout>
          <Todo date={selectedDay} todoData={todoList}>
            <Todo.ProgressBar />
            <Todo.TodoList />
          </Todo>

          <Timer />
        </Layout>
      </CalendarProvider>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.WHITE};
`;

const Layout = styled.View`
  flex: 1;
`;
