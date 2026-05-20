import step1 from '../../assets/process/step1.png'
import step2 from '../../assets/process/step2.png'
import step3 from '../../assets/process/step3.png'
import step4 from '../../assets/process/step4.png'

import { processSteps } from '../../data/siteContent'
import SectionHeader from '../common/SectionHeader'

const processIcons = [
  step1,
  step2,
  step3,
  step4,
]

const cardStyles = [
  {
    glow: 'from-orange-400/20 via-orange-300/10 to-transparent',
    iconBg: 'bg-orange-500',
    badge: 'text-orange-700 bg-orange-50 border-orange-200',
  },
  {
    glow: 'from-sky-400/20 via-cyan-300/10 to-transparent',
    iconBg: 'bg-sky-500',
    badge: 'text-sky-700 bg-sky-50 border-sky-200',
  },
  {
    glow: 'from-violet-400/20 via-fuchsia-300/10 to-transparent',
    iconBg: 'bg-violet-500',
    badge: 'text-violet-700 bg-violet-50 border-violet-200',
  },
  {
    glow: 'from-orange-400/20 via-orange-300/10 to-transparent',
    iconBg: 'bg-orange-500',
    badge: 'text-orange-700 bg-orange-50 border-orange-200',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#fcfcf8] px-5 py-8 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Process"
          title="A streamlined workflow built for serious growth"
          align="start"
        />

        <div className="relative mt-10">
          {/* Timeline */}
          <div className="absolute left-1/2 top-10 hidden h-[85%] w-px -translate-x-1/2 bg-linear-to-b from-orange-300 via-zinc-300 to-transparent xl:block" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const icon = processIcons[index]
              const style = cardStyles[index]

              return (
                <article
                  key={step.step}
                  className="motion-card group relative overflow-hidden rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${style.glow} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  {/* Big Number */}
                  <div className="absolute right-6 top-5 text-6xl font-black tracking-tight text-zinc-100 transition duration-500 group-hover:scale-110">
                    0{index + 1}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-0 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-orange-500 shadow-lg shadow-orange-300/40 xl:block"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="relative transition duration-500 group-hover:-translate-y-1 group-hover:scale-110">

                        {/* Glow */}
                        <div
                          className={`absolute inset-0 blur-2xl opacity-30 ${index === 0
                            ? 'bg-red-300'
                            : index === 1
                              ? 'bg-sky-300'
                              : index === 2
                                ? 'bg-violet-300'
                                : 'bg-orange-300'
                            }`}
                        />

                        {/* Image */}
                        <img
                          src={icon}
                          alt={step.title}
                          className="relative z-10 h-24 w-24 object-contain drop-shadow-xl"
                        />
                      </div>
                    </div>

                    {/* Step Badge */}
                    <span
                      className={`mt-5 inline-flex items-center rounded-2xl px-4 py-2 text-sm font-black tracking-wide shadow-sm ${index === 0
                        ? 'bg-linear-to-r from-red-500 to-red-500 text-white'
                        : index === 1
                          ? 'bg-linear-to-r from-sky-500 to-cyan-500 text-white'
                          : index === 2
                            ? 'bg-linear-to-r from-violet-500 to-fuchsia-500 text-white'
                            : 'bg-linear-to-r from-orange-500 to-orange-500 text-white'
                        }`}
                    >
                      Step {step.step}
                    </span>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-black leading-tight tracking-tight text-zinc-950">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-6 text-base leading-7 text-zinc-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}