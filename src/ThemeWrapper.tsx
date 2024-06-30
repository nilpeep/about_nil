import React from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import type { RootState } from "../src/redux/store";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.value);

  const containerClass = classnames({
    "theme-dark": theme === "dark",
    "theme-light": theme === "light",
    "theme-space": theme === "space",
  });

  return <div className={containerClass}>{children}</div>;
};

export default ThemeWrapper;
