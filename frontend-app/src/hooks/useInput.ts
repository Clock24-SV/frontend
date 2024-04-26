import { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");

  const onChangeValue = (text: string) => {
    setValue(text);
  };

  return [value, onChangeValue];
}
