
import Head from "next/head"
import { getPost, getSlugs } from "../../iib/posts"

export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: {slug}
        })),
        fallback: false,
    }
}

export async function getStaticProps({params: {slug}}) {
    const post = await getPost(slug)
    return {
        props: {
            post
        }
    }
}

export default function PostPage({post}){
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