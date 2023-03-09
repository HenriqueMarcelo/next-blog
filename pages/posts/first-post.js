import Head from "next/head"

export async function getStaticProps() {
    return {
        props: {
            post: {
                title: 'First Post',
                body: 'My fisrt post, as static props.'
            }
        }
    }
}

export default function FirstPost({post}){
    return(
        <main>
            <Head>
                <title>{post.title} | Next Blog</title>
            </Head>
            <h1>{post.title}</h1>
            <p>
                {post.body}
            </p>
        </main>
    )
}