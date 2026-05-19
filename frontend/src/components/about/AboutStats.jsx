export default function AboutStats() {
  const stats = [
    {
      value: '500+',
      label: 'Seller brands supported',
    },
    {
      value: '6.5+',
      label: 'Years experience',
    },
    {
      value: '24/7',
      label: 'Growth support',
    },
    {
      value: '4',
      label: 'Specialist teams',
    },
  ]

  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <article
            key={stat.label}
            className="motion-card group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-[#f8f8f4] p-8 shadow-lg shadow-zinc-900/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 ${
                index === 0
                  ? 'bg-linear-to-br from-orange-400/10 via-orange-200/5 to-transparent'
                  : index === 1
                  ? 'bg-linear-to-br from-sky-400/10 via-cyan-200/5 to-transparent'
                  : index === 2
                  ? 'bg-linear-to-br from-violet-400/10 via-fuchsia-200/5 to-transparent'
                  : 'bg-linear-to-br from-orange-400/10 via-orange-200/5 to-transparent'
              }`}
            />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-black text-white">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-5xl font-black tracking-tight text-zinc-950">
                {stat.value}
              </h3>

              <p className="mt-3 text-base font-bold leading-7 text-zinc-600">
                {stat.label}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}