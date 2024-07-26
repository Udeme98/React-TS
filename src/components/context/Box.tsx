import { useContext } from "react";
import { ThemeContext1 } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext1);
  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      Theme Context
    </div>
  );
};
export default Box;
