import SectionHeader from '../common/SectionHeader'

const timeline = [
  {
    year: '2018',
    title: 'Foundation in Patna',
    description: 'Xitamin began on 25 September 2018 with a mission to simplify e-commerce growth for startups and retailers.',
  },
  {
    year: '2019',
    title: 'Amazon recognition',
    description: 'Recognized as a rising service provider as marketplace consulting and seller support work accelerated.',
  },
  {
    year: '2020',
    title: 'Consulting excellence',
    description: 'Earned recognition for sales and advertising consultancy, strengthening the performance-led growth approach.',
  },
  {
    year: '2021',
    title: 'SPN performance wins',
    description: 'Awarded for account management, automate pricing, coupon campaigns, and e-commerce efficiency work.',
  },
  {
    year: '2022',
    title: 'Multi-city expansion',
    description: 'Scaled to 500+ clients and expanded presence across Patna, Delhi, and Mumbai with a 50+ member team.',
  },
  {
    year: '2023+',
    title: 'Ecosystem leadership',
    description: 'Recognized by Unicommerce and industry platforms while expanding into a full growth operating ecosystem.',
  },
]

export default function AboutTimeline() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Journey"
          title="The evolution of Xitamin"
          description="A timeline of how the company expanded into a full growth ecosystem."
          align="center"
        />

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-zinc-200 lg:block" />

          <div className="grid gap-10">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'
                }`}
              >
                <div className="motion-card rounded-[2rem] border border-zinc-200 bg-[#f8f8f4] p-8 shadow-lg shadow-zinc-900/5">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-3xl font-black text-zinc-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>

                <div className="hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
