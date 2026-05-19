import SectionHeader from '../common/SectionHeader'

const values = [
  {
    title: 'Integrity',
    text: 'Do the right thing even when the easier path is available.',
  },
  {
    title: 'Professionalism',
    text: 'Communicate clearly, respect timelines, and own the quality of the work.',
  },
  {
    title: 'Customer Focus',
    text: 'Listen carefully and build around what the business truly needs.',
  },
  {
    title: 'Value People',
    text: 'Treat clients, partners, and team members with respect and care.',
  },
  {
    title: 'Constant Improvement',
    text: 'Keep learning, testing, and improving the operating system.',
  },
  {
    title: 'Passion for Winning',
    text: 'Bring energy and discipline to every serious growth challenge.',
  },
]

export default function TeamValues() {
  return (
    <section className="bg-zinc-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Core Values"
          title="The principles behind every growth strategy."
          description="Our systems are designed around execution quality and long-term trust."
          tone="dark"
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="motion-card rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-black text-white">
                {value.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-300">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
