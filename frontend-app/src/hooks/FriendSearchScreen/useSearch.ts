import { Alert } from "react-native";
import useInput from "../useInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { MAX_SEARCHED_LIST_LENGTH } from "@/src/constants/search";

export default function useSearch() {
  const [search, changeSearch] = useInput();
  const [searchedData, setSearchedData] = useState<string[]>([]);

  const getData = async () => {
    try {
      const searchedList = await AsyncStorage.getItem("searchedList");
      if (searchedList !== null) {
        const dataList = JSON.parse(searchedList);
        setSearchedData(dataList);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to retrieve data.");
    }
  };

  const saveData = async () => {
    try {
      let updatedList = [];
      const searchedList = await AsyncStorage.getItem("searchedList");
      if (searchedList !== null) {
        updatedList = JSON.parse(searchedList);
        updatedList.unshift(search);
        if (updatedList.length > MAX_SEARCHED_LIST_LENGTH) {
          updatedList.pop();
        }
      } else {
        updatedList = [search];
      }
      await AsyncStorage.setItem("searchedList", JSON.stringify(updatedList));
    } catch (error) {
      Alert.alert("Error", "Failed to save data.");
    }
  };

  const removeData = async (indexToRemove: number) => {
    try {
      const updatedList = searchedData.filter(
        (_, index) => index !== +indexToRemove
      );
      await AsyncStorage.setItem("searchedList", JSON.stringify(updatedList));
      setSearchedData(updatedList);
    } catch (error) {
      Alert.alert("Error", "Failed to remove item.");
    }
  };

  useEffect(() => {
    getData();
  }, [saveData]);

  return { search, changeSearch, saveData, getData, searchedData, removeData };
}
