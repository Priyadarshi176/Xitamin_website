import BlogList from '../components/blog/BlogList'

export default function Blog() {
    return (
        <main id="main-content" className="mx-auto max-w-7xl px-5 py-16">
            <div className="mx-auto max-w-4xl mb-10 text-center">
                <h1 className="text-4xl font-bold mb-4">Insights & Resources</h1>
                <p className="text-zinc-600">Practical guides, case studies, and tips for marketplace growth.</p>
            </div>

            <div className="mx-auto max-w-6xl">
                <BlogList />
            </div>
        </main>
    )
}
