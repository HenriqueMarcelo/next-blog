import Link from 'next/link'

function HomePage() {
    console.log("[HomePage] render")
    return (
        <>
        <header>
            <nav>
                <ul>
                    <l1>
                        <Link href="/about">About</Link>
                    </l1>
                </ul>
            </nav>
        </header>
        <main>
            <h1>My Blog</h1>
        </main>
        </>
    )
}

export default HomePage