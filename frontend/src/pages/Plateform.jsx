import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
} from 'lucide-react'

import SectionHeader from '../components/common/SectionHeader'
import { contact, marketplaces } from '../data/siteContent'
import Process from '../components/home/Process'

const platformDetails = {
  amazon: {
    title: 'Amazon',
    eyebrow: 'Amazon marketplace management',
    badge: 'Organic SEO',
    logo: '/amazonLogo.png',
    image: "/amazon.png",
    summary:
      'A complete Amazon growth page for sellers who need stronger catalog quality, search ranking, account health, advertising control, and repeatable marketplace operations.',
    heroPoints: ['Amazon SEO', 'A+ content', 'PPC optimization', 'Account health'],
    stats: [
      { value: '01', label: 'Catalog and keyword audit' },
      { value: '02', label: 'Listing, store, and A+ optimization' },
      { value: '03', label: 'Ads, ranking, and account health support' },
    ],
    overview:
      'Amazon growth depends on clean catalog structure, correct keywords, strong product pages, stable compliance, and disciplined campaign management. Xitamin handles the operational work that helps sellers improve visibility, conversion, and long-term marketplace trust.',
    services: [
      'Seller Central setup and account hygiene',
      'Product listing creation and listing improvement',
      'Keyword research for titles, bullets, backend terms, and descriptions',
      'A+ content, brand store, and storefront optimization',
      'Sponsored ads planning, monitoring, and bid refinement',
      'Account health, suppression, and policy issue coordination',
    ],
    workflow: [
      'Audit catalog, competition, pricing, ranking, and account health.',
      'Prioritize the highest-impact product and store improvements.',
      'Update content, keywords, images, backend fields, and campaign structure.',
      'Track ranking, conversion, ad efficiency, and listing health every cycle.',
    ],
    focusAreas: [
      'Search visibility',
      'Conversion content',
      'Ad efficiency',
      'Compliance stability',
      'Storefront trust',
      'Category growth',
    ],
  },
  flipkart: {
    title: 'Flipkart',
    eyebrow: 'Flipkart seller growth',
    badge: 'Marketplace Growth',
    logo: '/flipkartLogo.png',
    image: "/flipkart.png",
    summary:
      'Flipkart management for sellers who need cleaner listings, better catalog discoverability, stronger conversion signals, and smoother daily marketplace operations.',
    heroPoints: ['Catalog quality', 'Search ranking', 'Ads support', 'Seller operations'],
    stats: [
      { value: '01', label: 'Product and category audit' },
      { value: '02', label: 'Content and visibility improvements' },
      { value: '03', label: 'Campaign and operations monitoring' },
    ],
    overview:
      'Flipkart sellers need sharp product presentation, category-fit keywords, reliable catalog hygiene, and fast operational responses. Xitamin improves the seller journey from listing readiness to discovery, campaigns, and ongoing marketplace maintenance.',
    services: [
      'Seller onboarding and store readiness support',
      'Listing creation, correction, and content enrichment',
      'Keyword-backed title, feature, and description improvements',
      'Marketplace advertising support and campaign monitoring',
      'Deal, promotion, and event-readiness planning',
      'Seller panel coordination for catalog and operational issues',
    ],
    workflow: [
      'Review store health, catalog depth, content gaps, and category position.',
      'Fix listing structure, images, keywords, attributes, and product details.',
      'Align campaigns, offers, and marketplace visibility opportunities.',
      'Monitor sales movement, catalog issues, and conversion signals.',
    ],
    focusAreas: [
      'Listing hygiene',
      'Category fit',
      'Campaign control',
      'Event readiness',
      'Operational support',
      'Conversion quality',
    ],
  },
  myntra: {
    title: 'Myntra',
    eyebrow: 'Myntra fashion commerce',
    badge: 'Fashion Commerce',
    logo: '/myntraLogo.png',
    image: "/myntra.png",
    summary:
      'Myntra marketplace support for fashion, apparel, and lifestyle brands that need polished product presentation, clean catalog structure, and stronger brand visibility.',
    heroPoints: ['Fashion catalog', 'Brand presence', 'Style-led content', 'Visibility planning'],
    stats: [
      { value: '01', label: 'Fashion catalog review' },
      { value: '02', label: 'Attribute and imagery cleanup' },
      { value: '03', label: 'Brand visibility tracking' },
    ],
    overview:
      'Fashion marketplaces reward strong presentation, complete attributes, accurate variants, and consistent brand storytelling. Xitamin helps apparel and lifestyle sellers keep their Myntra catalog polished, searchable, and ready for seasonal demand.',
    services: [
      'Fashion catalog structuring for styles, colors, sizes, and variants',
      'Product titles, attributes, and description refinement',
      'Image guideline checks and catalog presentation support',
      'Brand page and storefront content planning',
      'Seasonal launch and collection-readiness coordination',
      'Performance tracking for high-priority styles and categories',
    ],
    workflow: [
      'Map the brand catalog by category, collection, season, and margin priority.',
      'Improve product attributes, variant structure, naming, and visual readiness.',
      'Plan visibility for hero products, new drops, and seasonal collections.',
      'Review movement, search behavior, and catalog gaps after each update.',
    ],
    focusAreas: [
      'Variant accuracy',
      'Visual merchandising',
      'Fashion keywords',
      'Brand positioning',
      'Season planning',
      'Catalog consistency',
    ],
  },
  ajio: {
    title: 'Ajio',
    eyebrow: 'Ajio brand visibility',
    badge: 'Brand Visibility',
    logo: '/ajio.png',
    image: "/ajio.png",
    summary:
      'Ajio growth support for fashion and lifestyle brands that want premium catalog presentation, better discovery, and reliable marketplace execution.',
    heroPoints: ['Premium catalog', 'Lifestyle branding', 'Discovery support', 'Seller coordination'],
    stats: [
      { value: '01', label: 'Brand and catalog audit' },
      { value: '02', label: 'Presentation and keyword cleanup' },
      { value: '03', label: 'Marketplace execution support' },
    ],
    overview:
      'Ajio sellers need a balance of brand appeal and marketplace discipline. Xitamin supports product content, catalog structure, image quality checks, keyword positioning, and operational follow-through for lifestyle-focused growth.',
    services: [
      'Catalog planning for apparel, footwear, accessories, and lifestyle items',
      'Product content refinement for titles, descriptions, and attributes',
      'Image and presentation readiness checks',
      'Brand positioning support for premium product pages',
      'Marketplace issue tracking and seller coordination',
      'Performance review for priority styles and categories',
    ],
    workflow: [
      'Assess catalog readiness, brand presentation, and category competition.',
      'Improve product details, searchable terms, attributes, and visual flow.',
      'Coordinate marketplace tasks for content, corrections, and visibility.',
      'Track performance and refine priority products for better discovery.',
    ],
    focusAreas: [
      'Premium presentation',
      'Lifestyle search',
      'Brand consistency',
      'Catalog accuracy',
      'Seller coordination',
      'Category visibility',
    ],
  },
  blinkit: {
    title: 'Blinkit',
    eyebrow: 'Blinkit quick commerce',
    badge: 'Quick Commerce',
    logo: '/blinkit.png',
    image: "/blinkit.png",
    summary:
      'Blinkit optimization for brands that need fast product discovery, accurate catalog information, local availability discipline, and quick-commerce readiness.',
    heroPoints: ['Quick discovery', 'Catalog accuracy', 'Availability support', 'Fast-moving SKUs'],
    stats: [
      { value: '01', label: 'SKU and availability review' },
      { value: '02', label: 'Content and search optimization' },
      { value: '03', label: 'Fast-commerce performance checks' },
    ],
    overview:
      'Quick-commerce growth depends on accurate listings, searchable product information, local availability, pricing clarity, and fast response to demand changes. Xitamin helps brands keep priority SKUs clean, discoverable, and ready for high-intent buyers.',
    services: [
      'Priority SKU selection and catalog readiness planning',
      'Product name, keyword, attribute, and content improvements',
      'Image and pack-size information checks',
      'Availability, pricing, and listing issue tracking',
      'Category visibility and search placement review',
      'Performance monitoring for fast-moving products',
    ],
    workflow: [
      'Identify priority SKUs, pack sizes, demand pockets, and listing gaps.',
      'Clean product content, attributes, images, and searchable terms.',
      'Coordinate availability, pricing, and catalog issue resolution.',
      'Review fast-moving SKU performance and adjust content priorities.',
    ],
    focusAreas: [
      'SKU readiness',
      'Local availability',
      'Pack clarity',
      'Fast search',
      'Pricing hygiene',
      'Demand monitoring',
    ],
  },
  ebay: {
    title: 'Ebay',
    eyebrow: 'eBay global selling',
    badge: 'Global Selling',
    logo: '/ebay.png',
    image: "/ebay.png",
    summary:
      'eBay marketplace support for sellers who want better international listing quality, clearer product positioning, and structured cross-border growth operations.',
    heroPoints: ['Global listings', 'Listing SEO', 'Cross-border setup', 'Buyer trust'],
    stats: [
      { value: '01', label: 'Global catalog review' },
      { value: '02', label: 'Listing and trust optimization' },
      { value: '03', label: 'Cross-border performance tracking' },
    ],
    overview:
      'International marketplace selling needs detailed product information, strong listing SEO, accurate policies, clear shipping expectations, and buyer-trust signals. Xitamin helps sellers structure eBay listings for discovery and smoother global selling.',
    services: [
      'eBay store and listing setup support',
      'Product title, item specifics, and description optimization',
      'Category mapping and search visibility improvements',
      'Policy, shipping, return, and buyer-trust checks',
      'International listing refinement for priority products',
      'Performance tracking and listing improvement cycles',
    ],
    workflow: [
      'Review product-market fit, listing quality, shipping clarity, and competition.',
      'Improve titles, item specifics, descriptions, images, and trust signals.',
      'Align policies and product information for cross-border buyers.',
      'Track listing views, conversion signals, and improvement opportunities.',
    ],
    focusAreas: [
      'Global SEO',
      'Item specifics',
      'Policy clarity',
      'Buyer trust',
      'Cross-border fit',
      'Listing quality',
    ],
  },
  firstcry: {
    title: 'FirstCry',
    eyebrow: 'FirstCry kids commerce',
    badge: 'Kids Commerce',
    logo: '/firstcry.png',
    image: "/firstcry.png",
    summary:
      'FirstCry growth support for baby, kids, and parenting brands that need trust-led listings, clean product data, and category-specific marketplace operations.',
    heroPoints: ['Kids category', 'Trust-led content', 'Catalog clarity', 'Parenting shoppers'],
    stats: [
      { value: '01', label: 'Category and trust audit' },
      { value: '02', label: 'Product information cleanup' },
      { value: '03', label: 'Visibility and operations support' },
    ],
    overview:
      'Parenting shoppers compare safety, usefulness, age fit, materials, and product clarity before buying. Xitamin helps FirstCry sellers improve catalog information, category placement, trust signals, and ongoing marketplace execution.',
    services: [
      'Catalog setup for baby, kids, toys, apparel, and parenting products',
      'Age group, material, size, feature, and benefit information cleanup',
      'Trust-led product description and image readiness support',
      'Category mapping and searchable content refinement',
      'Marketplace issue tracking and catalog correction coordination',
      'Priority product performance and visibility review',
    ],
    workflow: [
      'Audit product clarity, category placement, attributes, and buyer trust gaps.',
      'Improve age, size, material, safety, feature, and benefit information.',
      'Coordinate catalog corrections and marketplace visibility tasks.',
      'Track movement across priority products and improve weak pages.',
    ],
    focusAreas: [
      'Trust signals',
      'Age-fit clarity',
      'Attribute quality',
      'Parent-focused copy',
      'Category accuracy',
      'Product readiness',
    ],
  },
  tatacliq: {
    title: 'Tata Cliq',
    eyebrow: 'Tata Cliq premium retail',
    badge: 'Premium Retail',
    logo: '/tatacliq.png',
    image: '/tatacliq.png',
    summary:
      'Tata Cliq marketplace support for brands that want premium product presentation, reliable catalog hygiene, and stronger retail marketplace visibility.',
    heroPoints: ['Premium retail', 'Brand trust', 'Catalog hygiene', 'Conversion quality'],
    stats: [
      { value: '01', label: 'Premium catalog audit' },
      { value: '02', label: 'Content and presentation refinement' },
      { value: '03', label: 'Visibility and performance checks' },
    ],
    overview:
      'Tata Cliq works best when product pages feel precise, premium, and trustworthy. Xitamin supports brand catalog presentation, searchable product content, category alignment, and operational follow-up for retail-ready growth.',
    services: [
      'Premium marketplace catalog setup and cleanup',
      'Product title, description, feature, and attribute refinement',
      'Brand presentation and trust signal improvement',
      'Image and content readiness review',
      'Category mapping and search visibility support',
      'Performance monitoring for priority products and collections',
    ],
    workflow: [
      'Review brand position, product pages, content gaps, and category context.',
      'Improve catalog details, keywords, visuals, and premium trust signals.',
      'Coordinate marketplace tasks for corrections, updates, and visibility.',
      'Monitor priority SKUs and refine underperforming pages.',
    ],
    focusAreas: [
      'Premium trust',
      'Retail-ready copy',
      'Visual quality',
      'Category alignment',
      'Brand consistency',
      'Search performance',
    ],
  },
}

const sectionIcons = [Store, Search, BarChart3, ShieldCheck]

export default function Plateform({ page }) {
  const params = useParams()
  const platformKey = page || params.platform
  const details = platformDetails[platformKey] || platformDetails.amazon
  const relatedMarketplaces = marketplaces.filter((item) => item.title !== details.title).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-[#f9f8f8] px-5 lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div>
            <Link
              to="/e-commerce"
              className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-white/90 px-3 py-1.5 text-sm font-semibold text-orange-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300"
            >
              <ArrowLeft size={16} />
              Back to platforms
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              {details.eyebrow}
            </p>

            <h1 className="mt-3 max-w-4xl text-5xl font-black leading-[0.96] text-zinc-950 sm:text-6xl lg:text-7xl">
              {details.title} growth management for serious sellers
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              {details.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.whatsapp}
                className="premium-button inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-zinc-950/20 transition hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                Discuss {details.title} growth
                <ArrowRight size={17} />
              </a>
              <Link
                to="/contact"
                className="rounded-lg border border-zinc-300 bg-white/90 px-6 py-3.5 text-center text-sm font-bold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-950"
              >
                Request an audit
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {details.heroPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-xl border border-zinc-200 bg-white/80 px-3 py-2 text-xs font-bold text-zinc-700 shadow-sm"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="sm:p-7">
            <img className='rounded-[1.6rem] w-full h-full object-cover shadow-2xl shadow-zinc-900/10 backdrop-blur-xl' src={details.image} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow={`${details.title} strategy`}
            title="Platform-specific work, managed end to end"
            description={details.overview}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {details.services.map((service, index) => {
              const Icon = sectionIcons[index % sectionIcons.length]

              return (
                <article
                  key={service}
                  className="group rounded-3xl border border-zinc-200 bg-[#fbfbf8] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-xl hover:shadow-orange-950/10"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-white transition duration-300 group-hover:bg-orange-500">
                    <Icon size={23} strokeWidth={2.2} />
                  </div>
                  <p className="text-base font-black leading-6 text-zinc-950">{service}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Process info={false}/>
      </section>

      <section className="bg-[#f7f6ef] p-8">
        <div className="mx-auto max-w-7xl">
          <div className=" rounded-[1.6rem] bg-zinc-950 p-6 shadow-2xl shadow-zinc-900/15 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
                  Start with an audit
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Ready to improve your {details.title} marketplace system?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
                  Share your store, product category, and current challenge. Xitamin will review the growth gap and recommend a practical execution path.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={contact.whatsapp}
                  className="premium-button rounded-lg bg-white px-6 py-3.5 text-center text-sm font-black text-zinc-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
                >
                  WhatsApp now
                </a>
                <Link
                  to="/contact"
                  className="rounded-lg border border-white/20 px-6 py-3.5 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-zinc-950"
                >
                  Contact Xitamin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
