import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'

export async function getPost(slug) {
    const source = await readFile(`content/posts/${slug}.md`, 'utf8')
    const { data: {date, title}, content } = matter(source)
    const body = marked(content)
    return {
        title,
        date,
        body,
    };
}

export async function getSlugs() {
    const sufix = '.md'
    const files = await readdir('content/posts')
    return files
        .filter((file) => file.endsWith(sufix))
        .map((file) => file.slice(0,  -sufix.length))
}