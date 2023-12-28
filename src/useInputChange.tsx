import { ChangeEvent, useState } from "react";
export default function useInputChange(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, handleChange };
}
