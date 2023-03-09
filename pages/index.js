import Head from 'next/head'
import Link from 'next/link'
import { getPosts } from '../iib/posts'

export async function getStaticProps() {
    const posts = await getPosts()
    return {
        props: {
            posts
        }
    }
}

function HomePage({ posts }) {
    return (
        <main>
            <Head>
                <title>Next Blog</title>
            </Head>
            <h1>My Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default HomePage