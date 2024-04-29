import { useState } from "react";

type UseInputReturn = [string, (text: string) => void];

export default function useInput(): UseInputReturn {
  const [value, setValue] = useState("");

  const onChangeValue = (text: string) => {
    setValue(text);
  };

  return [value, onChangeValue];
}
