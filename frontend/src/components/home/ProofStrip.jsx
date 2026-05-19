import { proofPoints } from '../data/siteContent'

export default function ProofStrip() {
  return (
    <section className="border-y border-zinc-200 bg-white px-5 py-5 lg:px-8" aria-label="Xitamin capabilities">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-zinc-500">Built for seller operations</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {proofPoints.map((point) => (
            <span key={point} className="text-sm font-bold text-zinc-800">
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
