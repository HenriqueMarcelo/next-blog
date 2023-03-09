
import Head from "next/head"
import { getPost } from "../../iib/posts"

export async function getStaticProps() {
    const post = await getPost('first-post')
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
            <p>{post.date}</p>
            <article dangerouslySetInnerHTML={{__html: post.body}}/>
        </main>
    )
}