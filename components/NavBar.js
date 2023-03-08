import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
            <style jsx>{`
                ul {
                    list-style: none;
                    padding: 0
                }
                
                li {
                    display: inline;
                }
                
                li:not(:first-child) {
                    margin-left: 0.75rem;
                }
                
            `}</style>
        </nav>
    )
}