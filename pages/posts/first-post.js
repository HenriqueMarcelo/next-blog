
import { readFile } from 'fs/promises'
import Head from "next/head"

export async function getStaticProps() {

    const data = await readFile('content/posts/first-post.json', 'utf8')
    const post = JSON.parse(data);

    return {
        props: {
            post
        }
    }
}

export default function FirstPost({post}){
    return(
        <main>
            <Head>
                <title>{post.title +  ' | Next Blog'}</title>
            </Head>
            <h1>{post.title}</h1>
            <p>
                {post.body}
            </p>
        </main>
    )
}