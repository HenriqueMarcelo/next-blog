import { useState } from "react";
import DarkTheme from "./DarkTheme";

export function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false);


    const text = darkMode ? 'Light Mode' : "Dark Mode"
    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
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