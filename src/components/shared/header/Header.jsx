import React from "react";
import Search from "./Search";
import { useTheme } from "@/lib/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function Header({ name }) {
  
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-between md:items-center items-start">
      <div className="#xl:px-32">
        <h1 className="text-5xl font-medium">{name}</h1>
        <Search />
      </div>
      <Button onClick={toggleTheme} variant="ghost" size="icon" className={''}>
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle Theme</span>
    </Button>
    </header>
  );
}

export default Header;
