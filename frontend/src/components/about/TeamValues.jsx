import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Briefcase,
  Target,
  HeartHandshake,
  TrendingUp,
  Trophy,
} from 'lucide-react'

import SectionHeader from '../common/SectionHeader'

const values = [
  {
    title: 'Integrity',
    text: 'Do the right thing even when the easier path is available.',
    icon: ShieldCheck,
  },
  {
    title: 'Professionalism',
    text: 'Communicate clearly, respect timelines, and own the quality of the work.',
    icon: Briefcase,
  },
  {
    title: 'Customer Focus',
    text: 'Listen carefully and build around what the business truly needs.',
    icon: Target,
  },
  {
    title: 'Value People',
    text: 'Treat clients, partners, and team members with respect and care.',
    icon: HeartHandshake,
  },
  {
    title: 'Constant Improvement',
    text: 'Keep learning, testing, and improving the operating system.',
    icon: TrendingUp,
  },
  {
    title: 'Passion for Winning',
    text: 'Bring energy and discipline to every serious growth challenge.',
    icon: Trophy,
  },
]

export default function TeamValues() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Core Values"
            title="The principles behind every growth strategy."
            description="Built around trust, execution quality, and long-term partnerships."
            align="center"
          />
        </div>

        {/* Circular Layout */}
        <div className="relative mx-auto mt-24 hidden h-195 w-195 lg:block">
          {/* Rings */}
          <div className="absolute inset-0 rounded-full border border-dashed border-orange-200" />

          <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-100" />

          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-br from-[#ff6200] to-orange-400 shadow-[0_25px_80px_rgba(255,98,0,0.25)]">
            <div className="text-center text-white">
              <p className="text-[11px] font-black uppercase tracking-[0.3em]">
                XITAMIN
              </p>

              <h3 className="mt-2 text-4xl font-black">
                Values
              </h3>
            </div>
          </div>

          {/* Orbit Cards */}
          {values.map((value, index) => {
            const Icon = value.icon

            const angle =
              (index / values.length) * Math.PI * 2 - Math.PI / 2

            const radius = 285

            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={value.title}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                className="absolute w-55 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  className="group relative overflow-hidden rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_30px_80px_rgba(255,98,0,0.18)]"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-transparent to-orange-100 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#ff6200] to-orange-400 shadow-lg shadow-orange-200">
                      <Icon
                        size={30}
                        className="text-white"
                        strokeWidth={2.4}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-center text-xl font-black text-zinc-900">
                      {value.title}
                    </h3>

                    {/* Hover Text */}
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
                      <p className="mx-auto max-w-42.5 text-center text-sm leading-7 text-zinc-600">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Layout */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <motion.div
                key={value.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="group relative overflow-hidden rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-transparent to-orange-100 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#ff6200] to-orange-400 shadow-lg shadow-orange-200">
                    <Icon
                      size={30}
                      className="text-white"
                      strokeWidth={2.4}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-center text-xl font-black text-zinc-900">
                    {value.title}
                  </h3>

                  {/* Text */}
                  <p className="mx-auto mt-4 w-full max-w-55 text-center text-sm leading-7 text-zinc-600">
                    {value.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}