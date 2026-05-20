// src/components/about/AboutTimeline.jsx

import {
  Award,
  BadgeCheck,
  Crown,
  Sparkles,
  Trophy,
} from 'lucide-react'

import {
  motion,
  useScroll,
  useSpring,
} from 'framer-motion'

import { useRef } from 'react'

const timeline = [
  {
    id: '01',
    year: '2018',
    title: 'The Beginning',
    icon: Trophy,
    content: (
      <>
        <h4 className="font-black text-white">Birth of Xitamin</h4>

        <p className="mt-3">
          Xitamin was officially founded on 25th September 2018 in Patna,
          Bihar. With a vision to simplify e-commerce for startups and
          retailers, the company began its journey with a strong focus on
          organic growth.
        </p>

        <div className="mt-8">
          <h4 className="font-black text-white">National Recognition</h4>

          <p className="mt-3">
            In its founding year, Xitamin earned the prestigious
            <span className="font-black text-white">
              {' '}
              National Entrepreneurship Award 2018
            </span>
            , establishing early credibility and promising potential in the
            Indian business ecosystem.
          </p>
        </div>
      </>
    ),
  },

  {
    id: '02',
    year: '2019',
    title: 'Rising Star Acknowledged by Amazon',
    icon: Award,
    content: (
      <>
        <p>
          Xitamin’s performance caught Amazon’s attention, earning it the
          <span className="font-black text-white">
            {' '}
            “New Rising Star of the Year”
          </span>{' '}
          award in 2019.
        </p>

        <p className="mt-5">
          This honor marked Xitamin as one of the fastest-growing and
          high-potential service providers on the platform.
        </p>
      </>
    ),
  },

  {
    id: '03',
    year: '2020',
    title: 'Double Honor from Amazon',
    icon: BadgeCheck,
    content: (
      <>
        <p>
          Xitamin was recognized twice by Amazon for its excellence in
          consultancy:
        </p>

        <ul className="mt-6 space-y-4 pl-5">
          <li className="list-disc">
            <span className="font-black text-white">
              Best Consultant of the Year in Sales
            </span>{' '}
            — December 2020
          </li>

          <li className="list-disc">
            <span className="font-black text-white">
              Best Consultant of the Year in Advertisement
            </span>{' '}
            — December 2020
          </li>
        </ul>

        <p className="mt-6">
          These awards reflected the company’s effectiveness in driving client
          growth on Amazon through strategic consulting.
        </p>
      </>
    ),
  },

  {
    id: '04',
    year: '2021',
    title: 'SPN Champions League Victory',
    icon: Crown,
    content: (
      <>
        <p>
          Xitamin proudly won the
          <span className="font-black text-white">
            {' '}
            SPN Champions League
          </span>
          , reaffirming its leadership within Amazon’s Service Provider
          Network.
        </p>

        <p className="mt-6">
          We’ve received four prestigious awards:
        </p>

        <ul className="mt-6 space-y-4 pl-5">
          <li className="list-disc font-black text-white">
            Account Management — December 2021
          </li>

          <li className="list-disc font-black text-white">
            Outstanding Performance in Automate Pricing — December 2021
          </li>

          <li className="list-disc font-black text-white">
            Outstanding Performance in Coupon Campaigns — December 2021
          </li>

          <li className="list-disc font-black text-white">
            E-commerce Efficiency & Client Visibility — December 2021
          </li>
        </ul>
      </>
    ),
  },

  {
    id: '05',
    year: '2022',
    title: 'Rapid Expansion Across India',
    icon: Sparkles,
    content: (
      <>
        <p>
          By 2022, Xitamin had scaled significantly, reaching
          <span className="font-black text-white"> 500+ clients </span>
          both nationally and globally.
        </p>

        <div className="mt-7">
          <h4 className="font-black text-white">Multi-City Presence</h4>

          <p className="mt-3">
            With operations now in
            <span className="font-black text-white">
              {' '}
              Patna, Delhi, and Mumbai
            </span>
            , the company ensured strong regional accessibility and servicing.
          </p>
        </div>

        <div className="mt-7">
          <h4 className="font-black text-white">
            Strengthening the Core Team
          </h4>

          <p className="mt-3">
            The internal team grew to over
            <span className="font-black text-white">
              {' '}
              50+ professionals
            </span>
            , contributing to Xitamin’s innovative and customer-centric service
            approach.
          </p>
        </div>
      </>
    ),
  },

  {
    id: '06',
    year: '2023',
    title: 'Unicommerce Gold DSA Award',
    icon: Trophy,
    content: (
      <>
        <p>
          Xitamin received the
          <span className="font-black text-white"> Gold DSA Award </span>
          from Unicommerce, underlining its continued leadership in the
          e-commerce industry.
        </p>

        <div className="mt-7">
          <h4 className="font-black text-white">
            Ranked Among the Top by Silicon India
          </h4>

          <p className="mt-3">
            Recognized among the
            <span className="font-black text-white">
              {' '}
              Top 5 E-commerce Account Management Providers
            </span>{' '}
            by Silicon India.
          </p>
        </div>
      </>
    ),
  },
]

export default function AboutTimeline() {
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 90%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.3,
  })
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#f5f5f5] px-5 py-24 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6200]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex rounded-full border border-red-200 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-600 shadow-sm">
            Our Journey
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl">
            The Journey of
            <span className="text-[#ff1a1a]"> Xitamin</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            From a vision to simplify e-commerce to becoming a leading growth
            partner across India.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative mt-24"
        >
          {/* Center Line */}
          <div className="absolute left-7 top-0 bottom-0 w-[3px] overflow-hidden rounded-full bg-zinc-300 lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              style={{
                scaleY,
              }}
              className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-black"
            />
          </div>

          <div className="space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className={`relative grid items-center gap-10 lg:grid-cols-2 ${index % 2 !== 0
                    ? 'lg:[&>*:first-child]:order-2'
                    : ''
                    }`}
                >
                  {/* Card */}
                  <div className="relative pl-24 lg:pl-0">
                    <motion.div
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-[#ff1010] p-6 text-white shadow-xl shadow-red-500/15 lg:p-7"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-black/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                      {/* Arrow */}
                      <div
                        className={`absolute top-10 hidden h-0 w-0 border-y-22 border-y-transparent lg:block ${index % 2 === 0
                          ? '-right-5 border-l-30 border-l-[#ff1010]'
                          : '-left-5 border-r-30 border-r-[#ff1010]'
                          }`}
                      />

                      <div className="relative z-10">
                        {/* Number */}
                        {/* <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-lg font-black backdrop-blur-xl">
                          {item.id}
                        </div> */}

                        {/* Title */}
                        <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
                          {item.title}
                        </h3>

                        {/* Content */}
                        <div className="mt-5 space-y-4 text-base leading-8 text-white/90">
                          {item.content}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Column */}
                  <div className="hidden lg:block" />

                  {/* Timeline Icon */}
                  <div className="absolute left-7 top-10 z-20 flex -translate-x-1/2 items-center justify-center lg:left-1/2">
                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 120,
                        delay: index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#ff1010] shadow-[0_0_40px_rgba(255,0,0,0.35)]"
                    >
                      {/* Ping */}
                      <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" />

                      <Icon size={34} strokeWidth={2.4} className="text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Dot */}
          <div className="absolute bottom-0 left-7 flex -translate-x-1/2 items-center justify-center lg:left-1/2">
            <div className="h-6 w-6 rounded-full border-4 border-black bg-white" />
          </div>
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-28 rounded-4xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-[#ff1010]">
                <Sparkles size={32} />
              </div>

              <div>
                <h3 className="text-3xl font-black leading-tight text-zinc-950">
                  A Journey Built on Trust, Performance & Excellence
                </h3>
              </div>
            </div>

            <p className="text-lg leading-9 text-zinc-600">
              From a small beginning in Patna to becoming a multi-city,
              award-winning e-commerce growth partner, Xitamin continues to
              empower brands and businesses to achieve sustainable success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}