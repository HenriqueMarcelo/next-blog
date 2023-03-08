import NavBar from "../components/NavBar"

export default function AboutPage(){
    console.log('[AboutPage] render')
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>About</h1>
            </main>
        </>
    )
}