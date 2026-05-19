import SectionHeader from '../common/SectionHeader'

const proof = [
  'Marketplace operations',
  'Organic visibility',
  'Compliance support',
  'Conversion websites',
]

export default function AboutStory() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Our Story"
            title="From Patna seller support to a national e-commerce growth partner."
            description="Xitamin was founded on 25 September 2018 to simplify e-commerce for startups, retailers, and ambitious online brands."
          />
        </div>

        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            What started as focused marketplace support evolved into a broader
            growth ecosystem for sellers who needed clearer operations,
            stronger content, better account health, and dependable execution.
          </p>

          <p>
            Today, Xitamin supports businesses across Amazon, Flipkart, Myntra,
            Ajio, Blinkit, Tata Cliq, FirstCry, eBay, and global marketplaces
            through strategy, operations, marketing, compliance, and technology.
          </p>

          <p>
            Instead of selling disconnected services, we build connected
            systems designed for long-term growth, operational clarity, and
            measurable business performance.
          </p>

          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            {proof.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-[#f8f8f4] px-5 py-4 text-sm font-black text-zinc-950"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
