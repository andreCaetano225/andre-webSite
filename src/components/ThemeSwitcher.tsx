"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

import { MdDarkMode } from 'react-icons/md'

import { IoMdSunny } from 'react-icons/io'


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [enabled, setEnabled] = useState(false)


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }


    return (
        <div className="right-5 top-2 p-2 w-fit absolute">

            <Switch
                checked={enabled}
                onChange={setEnabled}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`bg-darkBg dark:bg-lightBg relative inline-flex h-8 w-14 items-center rounded-full`}
            >


                <div className="translate-x-1 dark:translate-x-6 transform   transition">
                    {theme === "light" ? <MdDarkMode className="text-2xl text-white " /> : <IoMdSunny className="text-2xl text-white dark:text-black" />}
                </div>
            </Switch>

        </div>

    );
};