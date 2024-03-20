import React from "react";
import { Button } from "@nextui-org/react";
import MoonSunIcon from "./MoonSunIcon";
import useTheme from "../context/themeContext";



export default function ThemeButton() {
  const {toggleTheme} = useTheme();
  return (
    <div className="flex gap-4 items-center justify-end">
      <Button
        isIconOnly
        className="bg-black/25 dark:bg-white/50"
        aria-label="Like"
        size="md"
        onClick={toggleTheme}
      >
        <MoonSunIcon />
      </Button>
    </div>
  );
}
