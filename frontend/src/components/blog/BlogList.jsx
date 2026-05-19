import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import postsData from '../../data/blogPosts'
import BlogCard from './BlogCard'

export default function BlogList() {
    const [query, setQuery] = useState('')
    const [tag, setTag] = useState('')

    const tags = useMemo(() => {
        const set = new Set()
        postsData.forEach((p) => (p.tags || []).forEach((t) => set.add(t)))
        return Array.from(set)
    }, [])

    const posts = useMemo(() => {
        return postsData.filter((p) => {
            const matchesTag = tag ? (p.tags || []).includes(tag) : true
            const matchesQuery = query
                ? (p.title + ' ' + p.excerpt + ' ' + (p.tags || []).join(' ')).toLowerCase().includes(query.toLowerCase())
                : true
            return matchesTag && matchesQuery
        })
    }, [query, tag])

    return (
        <section>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                    <label className="sr-only">Search posts</label>
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search posts, e.g. SEO, listings..."
                        className="w-full rounded-lg border px-4 py-3 text-sm shadow-sm"
                    />
                </div>

                <div className="mt-3 flex gap-2 sm:mt-0 sm:ml-4">
                    <button
                        onClick={() => setTag('')}
                        className={`rounded-lg px-3 py-2 text-sm ${tag === '' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'}`}>
                        All
                    </button>
                    {tags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTag(t)}
                            className={`rounded-lg px-3 py-2 text-sm ${tag === t ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'}`}>
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {posts.length === 0 ? (
                <div className="rounded-lg border p-6 text-zinc-600">No posts match your search.</div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            )}

            <div className="mt-8 text-center text-sm text-zinc-500">
                <Link to="/contact" className="text-orange-600 font-bold">
                    Want us to write for you? Contact us.
                </Link>
            </div>
        </section>
    )
}
