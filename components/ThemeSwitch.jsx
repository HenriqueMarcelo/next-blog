import { useState } from "react";
import DarkTheme from "./DarkTheme";

export function ThemeSwitch() {

    function loadDarkMode() {
        if(typeof localStorage === "undefined") {
            return false;
        }

        const value = localStorage.getItem('next-blog@darkMode')
        return (value === null) ? false : JSON.parse(value)
    }

    const [darkMode, setDarkMode] = useState(loadDarkMode);

    function handleClick() {
        localStorage.setItem('next-blog@darkMode', JSON.stringify(!darkMode))
        setDarkMode(!darkMode)
    }


    const text = darkMode ? 'Light Mode' : "Dark Mode"
    return (
        <>
            <button onClick={handleClick} suppressHydrationWarning>
                {text}
            </button>
            <style jsx>{`
                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: inherit;
                    padding: 0.5rem 1rem;
                    border: 2px solid var(--text-color);
                }
            `}</style>
            { darkMode && <DarkTheme /> }
        </>
    )
}