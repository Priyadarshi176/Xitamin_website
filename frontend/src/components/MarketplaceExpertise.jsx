import { marketplaces } from '../data/siteContent'
import SectionHeader from '../components/common/SectionHeader'

const marketplaceDetails = {
  Amazon: {
    tag: 'Global commerce',
    description: 'Catalog SEO, PPC scaling, account health, and international growth systems.',
    metric: '500+ optimized listings',
    glow: 'from-orange-400/20 via-orange-300/10 to-transparent',
    border: 'group-hover:border-orange-300/60',
  },
  Flipkart: {
    tag: 'Marketplace growth',
    description: 'Seller operations, ads optimization, and conversion-focused listing management.',
    metric: 'High-volume seller support',
    glow: 'from-blue-400/20 via-cyan-300/10 to-transparent',
    border: 'group-hover:border-blue-300/60',
  },
  Myntra: {
    tag: 'Fashion commerce',
    description: 'Brand visibility, apparel catalog structuring, and campaign execution.',
    metric: 'Fashion-first optimization',
    glow: 'from-red-400/20 via-rose-300/10 to-transparent',
    border: 'group-hover:border-red-300/60',
  },
  Ajio: {
    tag: 'Lifestyle marketplace',
    description: 'Product presentation, catalog quality, and premium storefront management.',
    metric: 'Brand-focused workflows',
    glow: 'from-violet-400/20 via-fuchsia-300/10 to-transparent',
    border: 'group-hover:border-violet-300/60',
  },
  Blinkit: {
    tag: 'Quick commerce',
    description: 'Rapid inventory systems and high-velocity operational support.',
    metric: 'Fast-moving catalog handling',
    glow: 'from-orange-400/20 via-orange-300/10 to-transparent',
    border: 'group-hover:border-orange-300/60',
  },
  'Tata Cliq': {
    tag: 'Premium retail',
    description: 'Structured brand presence and marketplace compliance systems.',
    metric: 'Premium retail positioning',
    glow: 'from-slate-400/20 via-zinc-300/10 to-transparent',
    border: 'group-hover:border-slate-300/60',
  },
  FirstCry: {
    tag: 'Parenting marketplace',
    description: 'Category-focused listing optimization and trust-building storefronts.',
    metric: 'Niche category scaling',
    glow: 'from-sky-400/20 via-cyan-300/10 to-transparent',
    border: 'group-hover:border-sky-300/60',
  },
  eBay: {
    tag: 'Cross-border selling',
    description: 'International product exposure and global marketplace operations.',
    metric: 'Worldwide reach support',
    glow: 'from-indigo-400/20 via-blue-300/10 to-transparent',
    border: 'group-hover:border-indigo-300/60',
  },
  'Amazon Global': {
    tag: 'International expansion',
    description: 'Cross-border growth systems, compliance, and global catalog management.',
    metric: 'Global seller workflows',
    glow: 'from-orange-400/20 via-orange-300/10 to-transparent',
    border: 'group-hover:border-orange-300/60',
  },
}

export default function MarketplaceExpertise() {
  return (
    <section
      id="marketplaces"
      className="relative overflow-hidden bg-[#f7f6ef] px-5 py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Marketplace expertise"
          title="Built for modern marketplace ecosystems"
          description="Platform-specific growth systems for catalog quality, account health, marketplace SEO, sponsored ads, and operational scale."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {marketplaces.map((marketplace, index) => {
            const details = marketplaceDetails[marketplace]

            return (
              <article
                key={marketplace}
                className={`motion-card group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-900/10 ${details.border}`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${details.glow} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-zinc-600">
                        {details.tag}
                      </span>

                      <h3 className="mt-5 text-3xl font-black tracking-tight text-zinc-950">
                        {marketplace}
                      </h3>
                    </div>

                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-zinc-200 bg-white text-sm font-black text-zinc-950 shadow-sm transition duration-300 group-hover:scale-110 group-hover:border-orange-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-7 text-zinc-600">
                    {details.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-5">
                    <span className="text-sm font-bold text-orange-700">
                      {details.metric}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}