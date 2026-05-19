import { Link } from 'react-router-dom'

function stripHtml(html = '') {
    return html.replace(/<[^>]+>/g, ' ')
}

function readingTimeFromHtml(html = '') {
    const words = stripHtml(html).trim().split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.ceil(words / 200))
}

export default function BlogCard({ post }) {
    const readingTime = post.readingTime || readingTimeFromHtml(post.content)

    return (
        <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
            <Link to={`/blog/${post.slug}`} className="block">
                {post.image && (
                    <div className="h-44 w-full overflow-hidden bg-zinc-100">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}

                <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="text-sm text-zinc-500">{post.date}</div>
                        <div className="h-0.5 w-6 bg-zinc-100" />
                        <div className="text-sm text-zinc-500">{readingTime} min read</div>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{post.title}</h3>
                    <p className="text-zinc-700 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            {(post.tags || []).slice(0, 3).map((t) => (
                                <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="text-orange-600 font-bold">Read →</div>
                    </div>
                </div>
            </Link>
        </article>
    )
}
