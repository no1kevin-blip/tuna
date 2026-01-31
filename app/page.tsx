'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OceanScene = dynamic(() => import('@/components/OceanScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-linear-to-b from-[#79bfff] via-[#4a9fd8] to-[#00124c]" />
  ),
});

export default function Home() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  const content = {
    zh: {
      companyName: "BigEye International",
      nav: {
        about: "關於我們",
        products: "產品",
        services: "服務",
        contact: "聯絡我們"
      },
      hero: {
        title: "優質海鮮 · 全球貿易",
        description: "國際性海鮮貿易的領導者，擁有自己的鮪魚船隊，為全球客戶提供高品質海鮮產品",
        cta: "聯絡我們"
      },
      about: {
        title: "關於我們",
        p1: "主要是以經營國際性海鮮貿易為主軸的跨國公司，總公司位於台灣及加拿大溫哥華分部，我們並擁有自己的鮪魚船隊，捕撈海域在印度洋區。對於漁業多年的投入及專業，一直不遺於力，多年來在業界豎立了良好聲譽及優質形象。",
        p2: "我們的海鮮產品多樣，版圖廣大，可接軌北美洲及亞洲各國，如美國，加拿大，台灣，中國，日本，新加坡，菲律賓，斯里蘭卡等國家的市場，都是我們服務區域。",
        p3: "BigEye International 多年來秉持著一貫的服務理念，為世界各地的客戶提供高品質，具競爭性且合理價格，落實為客戶創造高價值感的服務。",
        values: {
          title: "核心價值",
          content: "優 · 信 · 實"
        },
        global: {
          title: "全球服務",
          content: "北美洲 · 亞洲各國"
        },
        fleet: {
          title: "自有船隊",
          content: "印度洋捕撈區域"
        }
      },
      products: {
        title: "產品介紹",
        mainTitle: "主要進出口產品",
        otherTitle: "其他海鮮產品",
        salmonTitle: "太平洋鮭魚品種",
        items: [
          { name: "大目鮪魚", en: "Bigeye Tuna" },
          { name: "黃鰭鮪魚", en: "Yellow Fin Tuna" },
          { name: "長鰭鮪魚", en: "Albacore Tuna" },
          { name: "鮭魚卵", en: "Salmon Roe" },
          { name: "太平洋鮭魚", en: "Pacific Salmon" },
          { name: "沙丁魚", en: "Sardine" },
          { name: "鯡魚", en: "Herring" },
          { name: "黑鱈/銀鱈", en: "Black Cod" },
          { name: "牡丹蝦", en: "Spot Prawns" }
        ],
        others: [
          "海膽",
          "海參",
          "魚子醬 ",
          "珍寶蟹 ",
          "雙線鰈魚 ",
          "副眉鰈 ",
          "石斑魚 ",
          "太平洋鯡魚 ",
          "太平洋大比目魚 ",
          "無須鱈魚 ",
          "箭齒鰈魚 ",
          "太平洋真鱈魚 ",
          "粉紅蝦 "
        ]
      },
      services: {
        title: "貿易服務項目",
        items: [
          { title: "魚餌", desc: "針對大型商業用捕魚" },
          { title: "魚粉飼料", desc: "優質飼料供應" },
          { title: "高級歐美海產", desc: "進口及代理服務" },
          { title: "高級日本海產", desc: "進口及代理服務" }
        ],
        vision: {
          title: "各式海鮮產品引進、開發及代理",
          subtitle: "為漁業夥伴創造利潤，共享成就是我們的願景"
        }
      },
      contact: {
        title: "聯絡我們",
        welcome: "歡迎您與我們連繫，成為我們事業上最佳的合作夥伴！",
        taiwan: "台灣總部",
        canada: "加拿大分部",
        regions: "服務區域：",
        countries: ["美國", "加拿大", "台灣", "中國", "日本", "新加坡", "菲律賓", "斯里蘭卡"]
      },
      footer: {
        tagline: "優 · 信 · 實 | Excellence · Trust · Integrity"
      }
    },
    en: {
      companyName: "BigEye International",
      nav: {
        about: "About",
        products: "Products",
        services: "Services",
        contact: "Contact"
      },
      hero: {
        title: "Premium Seafood · Global Trade",
        description: "International leader in seafood trading, with our own tuna fleet, providing high-quality seafood products to global customers",
        cta: "Contact Us"
      },
      about: {
        title: "About Us",
        p1: "A multinational company specializing in international seafood trading, with headquarters in Taiwan and a branch in Vancouver, Canada. We own our own tuna fleet, fishing in the Indian Ocean. Through years of dedication and expertise in the fishing industry, we have established an excellent reputation and quality image in the industry.",
        p2: "Our diverse seafood products span a vast territory, connecting markets in North America and Asia, including the United States, Canada, Taiwan, China, Japan, Singapore, Philippines, Sri Lanka, and other countries.",
        p3: "For many years, BigEye International has adhered to a consistent service philosophy, providing customers worldwide with high quality, competitive and reasonable prices, creating high value services for our customers.",
        values: {
          title: "Core Values",
          content: "Excellence · Trust · Integrity"
        },
        global: {
          title: "Global Service",
          content: "North America · Asia"
        },
        fleet: {
          title: "Own Fleet",
          content: "Indian Ocean Fishing Zone"
        }
      },
      products: {
        title: "Products",
        mainTitle: "Main Import/Export Products",
        otherTitle: "Other Seafood Products",
        salmonTitle: "Pacific Salmon Varieties",
        items: [
          { name: "Bigeye Tuna", en: "" },
          { name: "Yellow Fin Tuna", en: "" },
          { name: "Albacore Tuna", en: "" },
          { name: "Salmon Roe", en: "" },
          { name: "Pacific Salmon", en: "" },
          { name: "Sardine", en: "" },
          { name: "Herring", en: "" },
          { name: "Black Cod", en: "" },
          { name: "Spot Prawns", en: "" }
        ],
        others: [
          "Sea Urchin",
          "Sea Cucumber",
          "Caviar",
          "Dungeness Crab",
          "Rock Sole",
          "English Sole",
          "Rockfish",
          "Pacific Herring",
          "Pacific Halibut",
          "Hake",
          "Arrowtooth Flounder",
          "Pacific Cod",
          "Pink Shrimp"
        ]
      },
      services: {
        title: "Services",
        items: [
          { title: "Fish Bait", desc: "For large commercial fishing" },
          { title: "Fish Meal Feed", desc: "Quality feed supply" },
          { title: "Premium European & American Seafood", desc: "Import and agency services" },
          { title: "Premium Japanese Seafood", desc: "Import and agency services" }
        ],
        vision: {
          title: "Import, Development and Agency of Various Seafood Products",
          subtitle: "Creating profits for fishing partners and sharing achievements is our vision"
        }
      },
      contact: {
        title: "Contact Us",
        welcome: "Welcome to contact us and become our best business partner!",
        taiwan: "Taiwan Headquarters",
        canada: "Vancouver, Canada",
        regions: "Service Regions:",
        countries: ["USA", "Canada", "Taiwan", "China", "Japan", "Singapore", "Philippines", "Sri Lanka"]
      },
      footer: {
        tagline: "Excellence · Trust · Integrity"
      }
    }
  };

  const t = content[lang];

  return (
    <div
      className="min-h-screen"
      suppressHydrationWarning
    >
      {/* Header - Fixed at top, transparent over hero */}
      <Header lang={lang} setLang={setLang} companyName={t.companyName} nav={t.nav} />

      {/* Hero Section with Ocean Scene Background */}
      <section className="relative text-white overflow-hidden h-screen" suppressHydrationWarning>
        {/* Ocean Scene Background */}
        <div className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
          <OceanScene />
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full pb-12 sm:pb-16 lg:pb-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-2xl leading-tight">
                {t.hero.title}
              </h2>

              <p className="text-lg sm:text-xl mb-8 leading-relaxed drop-shadow-lg font-light max-w-xl">
                {t.hero.description}
              </p>

              <a
                href="mailto:sales@tuna.com.tw"
                className="group relative inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-4 font-semibold overflow-hidden transition-all duration-500 text-base sm:text-lg border-l-4 border-blue-900 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <span className="relative z-10 tracking-wide">{t.hero.cta}</span>
                <svg
                  className="relative z-10 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>

                {/* Decorative line that expands on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-900 group-hover:w-full transition-all duration-500"></div>
              </a>
            </div>
          </div>
        </div>

      </section>


      {/* About Section - Maritime Luxury */}
      <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
        {/* Decorative wave pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#1e40af" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10">
          {/* Diagonal composition */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Company story */}
            <div className="relative">
              <div className="border-l-4 border-blue-900 pl-8 mb-8">
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-blue-950 mb-4 leading-tight">
                  {t.companyName}
                </h2>
                <div className="h-px w-16 bg-blue-900 mb-6"></div>
                <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-6 font-light">
                  {t.about.p1}
                </p>
              </div>
            </div>

            {/* Right: Value pillars in cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Excellence card */}
              <div className="group relative bg-white border-2 border-slate-200 hover:border-blue-900 transition-all duration-500 p-6 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-900 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-blue-950 mb-2">{t.about.values.title}</h3>
                    <p className="text-sm text-slate-600 font-light">{t.about.values.content}</p>
                  </div>
                </div>
              </div>

              {/* Global card */}
              <div className="group relative bg-white border-2 border-slate-200 hover:border-blue-900 transition-all duration-500 p-6 hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-900 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0 transform group-hover:scale-110 transition-transform duration-300">🌏</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-blue-950 mb-2">{t.about.global.title}</h3>
                    <p className="text-sm text-slate-600 font-light">{t.about.global.content}</p>
                  </div>
                </div>
              </div>

              {/* Fleet card */}
              <div className="group relative bg-white border-2 border-slate-200 hover:border-blue-900 transition-all duration-500 p-6 hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: '200ms' }}>
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-900 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0 transform group-hover:scale-110 transition-transform duration-300">🚢</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-blue-950 mb-2">{t.about.fleet.title}</h3>
                    <p className="text-sm text-slate-600 font-light">{t.about.fleet.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Extended info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 pt-12 border-t border-slate-300">
            <div>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {t.about.p2}
              </p>
            </div>
            <div>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {t.about.p3}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" className="py-20 sm:py-32 bg-white w-full relative overflow-hidden">
        {/* Subtle wave pattern background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#00124c" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)"/>
          </svg>
        </div>

        <div className="relative z-10 px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-blue-950 mb-4">
              {t.products.title}
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
              Premium Selection from Ocean to Table
            </p>
          </div>

          {/* Main Products */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1 h-12 bg-blue-950"></div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-blue-950">{t.products.mainTitle}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.products.items.map((product, idx) => (
                  <div key={idx} className="group relative bg-slate-50 border-2 border-slate-200 hover:border-sky-400 transition-all duration-500 overflow-hidden hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="p-6">
                      <div className="mb-6 flex items-center justify-center h-24 bg-white/50 rounded">
                      {idx === 0 ? (
                        <Image
                          src="/BigeyeTuna.png"
                          alt="Bigeye Tuna"
                          width={120}
                          height={64}
                          className="object-contain"
                        />
                      ) : idx === 1 ? (
                        <Image
                          src="/YellowFinTuna.jpg"
                          alt="Yellow Fin Tuna"
                          width={120}
                          height={64}
                          className="object-contain"
                        />
                      ) : idx === 2 ? (
                        <Image
                          src="/AbacoreTuna.png"
                          alt="Albacore Tuna"
                          width={120}
                          height={64}
                          className="object-contain"
                          style={{ transform: 'scaleX(-1)' }}
                        />
                      ) : idx === 3 ? (
                        <Image
                          src="/SalmonRoe.jpg"
                          alt="Salmon Roe"
                          width={120}
                          height={64}
                          className="object-contain"
                          unoptimized
                        />
                      ) : idx === 4 ? (
                        <Image
                          src="/PacificSalmon .png"
                          alt="Pacific Salmon"
                          width={120}
                          height={64}
                          className="object-contain"
                        />
                      ) : idx === 5 ? (
                        <Image
                          src="/Sardines.jpg"
                          alt="Sardines"
                          width={120}
                          height={64}
                          className="object-contain"
                        />
                      ) : idx === 6 ? (
                        <Image
                          src="/Herring.png"
                          alt="Herring"
                          width={120}
                          height={64}
                          className="object-contain"
                        />
                      ) : idx === 7 ? (
                        <Image
                          src="/BlackCod.png"
                          alt="Black Cod"
                          width={120}
                          height={64}
                          className="object-contain"
                        />
                      ) : idx === 8 ? (
                        <Image
                          src="/SpotPrawns.jpg"
                          alt="Spot Prawns"
                          width={120}
                          height={64}
                          className="object-contain"
                        />
                      ) : (
                        <div className="text-4xl">
                          🐟
                        </div>
                      )}
                      </div>
                      <h4 className="font-serif font-bold text-xl text-blue-950 mb-2 group-hover:text-sky-600 transition-colors duration-300">{product.name}</h4>
                      {product.en && <p className="text-slate-600 text-sm font-light uppercase tracking-wider">{product.en}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Products */}
            <div className="bg-slate-50 border-l-4 border-blue-950 p-10">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-blue-950">{t.products.otherTitle}</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-slate-700">
                {t.products.others.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-sky-400 mt-2 shrink-0 transform group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pacific Salmon Varieties */}
            <div className="mt-12 bg-blue-50/50 border-2 border-blue-100 p-12">
              <h3 className="text-3xl font-serif font-bold mb-2 text-center text-blue-950">
                {t.products.salmonTitle}
              </h3>
              <div className="w-20 h-1 bg-sky-400 mx-auto mb-10"></div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group bg-white border-2 border-slate-200 p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-500">
                  <p className="font-bold text-2xl mb-2 text-blue-950 tracking-widest">CHUM</p>
                  <p className="text-sm text-slate-600 font-light italic">Oncorhynchus keta</p>
                </div>
                <div className="group bg-white border-2 border-slate-200 p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-500">
                  <p className="font-bold text-2xl mb-2 text-blue-950 tracking-widest">PINK</p>
                  <p className="text-sm text-slate-600 font-light italic">Oncorhynchus gorbuscha</p>
                </div>
                <div className="group bg-white border-2 border-slate-200 p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-500">
                  <p className="font-bold text-2xl mb-2 text-blue-950 tracking-widest">SOCKEYE</p>
                  <p className="text-sm text-slate-600 font-light italic">Oncorhynchus nerka</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32">
        <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-blue-950 mb-4">
              {t.services.title}
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {t.services.items.map((service, idx) => (
              <div key={idx} className="group relative bg-white border-2 border-slate-200 hover:border-sky-400 p-8 transition-all duration-500 hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {idx === 0 ? '🎣' : idx === 1 ? '🌾' : idx === 2 ? '🇪🇺' : '🇯🇵'}
                </div>
                <h4 className="font-serif font-bold text-xl mb-3 text-blue-950 group-hover:text-sky-600 transition-colors duration-300">{service.title}</h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="bg-blue-950 border-l-4 border-sky-400 p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-white">{t.services.vision.title}</h3>
              <div className="w-20 h-1 bg-sky-400 mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed">{t.services.vision.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 bg-white relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#00124c" fill="none" strokeWidth="1"/>
                <path d="M0 60 Q 25 35, 50 60 T 100 60" stroke="#00124c" fill="none" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-waves)"/>
          </svg>
        </div>

        <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-blue-950 mb-6">
                {t.contact.title}
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              {t.contact.welcome}
            </p>

            {/* Premium Email Link */}
            <a
              href="mailto:sales@tuna.com.tw"
              className="group inline-flex items-center gap-3 bg-blue-950 text-white px-8 py-4 font-semibold transition-all duration-500 hover:bg-sky-500 hover:shadow-2xl border-l-4 border-sky-400"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="tracking-wide">sales@tuna.com.tw</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Location Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group relative bg-white border-2 border-slate-200 hover:border-sky-400 p-10 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-1 h-0 bg-sky-400 group-hover:h-full transition-all duration-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🇹🇼</div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-2xl mb-2 text-blue-950 group-hover:text-sky-600 transition-colors duration-300">
                    {t.contact.taiwan}
                  </h4>
                  {lang === 'zh' && (
                    <p className="text-slate-500 font-light text-sm uppercase tracking-wider">Taiwan Headquarters</p>
                  )}
                </div>
              </div>
            </div>

            <div className="group relative bg-white border-2 border-slate-200 hover:border-sky-400 p-10 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-1 h-0 bg-sky-400 group-hover:h-full transition-all duration-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🇨🇦</div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-2xl mb-2 text-blue-950 group-hover:text-sky-600 transition-colors duration-300">
                    {t.contact.canada}
                  </h4>
                  {lang === 'zh' && (
                    <p className="text-slate-500 font-light text-sm uppercase tracking-wider">Vancouver, Canada</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Service Regions */}
          <div className="bg-slate-50 border-2 border-slate-100 p-10 sm:p-12">
            <div className="max-w-5xl mx-auto text-center">
              <h3 className="font-serif font-bold text-2xl mb-3 text-blue-950">{t.contact.regions}</h3>
              <div className="w-16 h-1 bg-sky-400 mx-auto mb-8"></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
                {t.contact.countries.map((region, idx) => (
                  <span
                    key={idx}
                    className="group w-full flex items-center justify-center bg-white border-2 border-slate-200 hover:border-sky-400 text-blue-950 px-5 py-3.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="w-0 h-px bg-sky-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer companyName={t.companyName} tagline={t.footer.tagline} />
    </div>
  );
}
