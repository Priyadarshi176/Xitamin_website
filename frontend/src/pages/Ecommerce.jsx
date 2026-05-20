import { marketplaces } from "../data/siteContent";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Ecommerce() {

  const routeTo = useNavigate();
  return (
    <section className="w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-4">
      <div className="absolute h-full inset-0 bg-grid opacity-70" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="flex w-full max-w-4xl flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
            Ecommerce Growth
          </span>

          <h1 className="text-3xl font-bold leading-tight text-zinc-950 sm:text-3xl lg:text-4xl">
            Your Growth Partner Across Top E-Commerce Platforms
          </h1>

          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
            From listings to rankings — we manage complete eCommerce growth with
            organic visibility strategies designed for long-term marketplace
            success.
          </p>
        </div>

        <div className="h-px w-full bg-zinc-200"></div>

        <div className="plateformsdiv grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {marketplaces.map((item, index) => {
            return (
              <div
                key={index}
                onClick={()=>routeTo(item.goto)}
                className="relative group flex min-h-[19rem] flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:-translate-z-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-950/10 sm:p-5"
              >
                <div className="flex w-full items-start justify-between gap-3">
                  <div className="rounded-full bg-gradient-to-br from-white via-orange-100 to-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-orange-700 shadow-sm">
                    <p>{item.badge}</p>
                  </div>

                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-zinc-200 text-zinc-500 transition duration-300 group-hover:border-orange-300 group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowUpRight size={18} strokeWidth={2.2} />
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center py-8">
                  <div className="grid h-24 w-24 place-items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-inner sm:h-28 sm:w-28">
                    <img
                      src={item.logo}
                      alt="logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-zinc-950">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
