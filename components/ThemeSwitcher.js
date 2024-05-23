"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MdOutlineDownloading } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted) return <MdOutlineDownloading className="w-10 h-10" />;

  if (resolvedTheme === "dark") {
    return (
      <MdSunny
        className="w-12 h-12 hover:text-yellow-200 cursor-pointer transition-all"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <MdDarkMode
        className="w-12 h-12 hover:text-gray-300 transition-all cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }

  return null;
}

export default ThemeSwitcher;
