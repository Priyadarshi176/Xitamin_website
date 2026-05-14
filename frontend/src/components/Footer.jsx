import { contact, navItems } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-lg font-black text-zinc-950">X</span>
            <h2 className="text-2xl font-black uppercase">Xitamin</h2>
          </div>
          <p className="mt-4 max-w-md leading-7 text-zinc-300">
            Planting the right digital systems for sellers through marketplace operations, marketing, finance, legal,
            and technology support.
          </p>
        </div>

        <div>
          <h3 className="font-black uppercase tracking-[0.14em] text-zinc-400">Navigate</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-zinc-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black uppercase tracking-[0.14em] text-zinc-400">Contact</h3>
          <div className="mt-4 grid gap-3 text-zinc-300">
            <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="transition hover:text-white">
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="transition hover:text-white">
              {contact.email}
            </a>
            <a href={`https://${contact.website}`} className="transition hover:text-white">
              {contact.website}
            </a>
            {/* <a
              href={contact.emailHref}
              className="premium-button mt-2 rounded-lg border border-white/15 px-4 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-zinc-950"
            >
              Email Xitamin
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
