"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-muted-foreground/5 backdrop-blur-lg"
    >
      <Sun className="size-5 scale-100 dark:scale-0" />
      <Moon className="absolute size-5 scale-0 dark:scale-100" />
    </Button>
  );
};

export default ThemeToggle;
