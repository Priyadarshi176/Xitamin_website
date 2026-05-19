import { useParams, Link } from 'react-router-dom'
import posts from '../data/blogPosts'

function stripHtml(html = '') {
    return html.replace(/<[^>]+>/g, ' ')
}

function estimateReadingTime(html = '') {
    const words = stripHtml(html).trim().split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.ceil(words / 200))
}

export default function BlogPost() {
    const { slug } = useParams()
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        return (
            <main className="mx-auto max-w-4xl px-5 py-16">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <p className="mb-6">We couldn't find the post you're looking for.</p>
                <Link to="/blog" className="text-orange-600 font-bold">
                    ← Back to blog
                </Link>
            </main>
        )
    }

    const readingTime = post.readingTime || estimateReadingTime(post.content)

    return (
        <main className="mx-auto max-w-3xl px-5 py-16">
            {post.image && (
                <div className="mb-8 overflow-hidden rounded-2xl">
                    <img src={post.image} alt={post.title} className="w-full object-cover" />
                </div>
            )}

            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <div>{post.date}</div>
                    <div>•</div>
                    <div>{readingTime} min read</div>
                    {post.author && (
                        <>
                            <div>•</div>
                            <div>{post.author}</div>
                        </>
                    )}
                </div>
            </div>

            <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-10 flex items-center justify-between">
                <Link to="/blog" className="text-orange-600 font-bold">
                    ← Back to blog
                </Link>

                <div className="flex items-center gap-3 text-sm">
                    <a
                        href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}
                        className="text-zinc-600 hover:text-zinc-900"
                    >
                        Share
                    </a>
                </div>
            </div>
        </main>
    )
}
