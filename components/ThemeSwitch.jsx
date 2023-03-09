import { useState } from "react";

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

                    padding: 0.5rem 1rem;
                    border: 2px solid black;
                }
            `}</style>
        </>
    )
}