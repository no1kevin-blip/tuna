'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          "平頭鰈魚 ",
          "石斑魚 ",
          "太平洋鯡魚 ",
          "太平洋大比目魚 ",
          "無須鱈魚 ",
          "箭齒鰈魚 ",
          "太平洋真鱈魚 ",
          "銀鯧 ",
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
          "Flathead Sole",
          "Rockfish",
          "Pacific Herring",
          "Pacific Halibut",
          "Hake",
          "Arrowtooth Flounder",
          "Pacific Cod",
          "Butterfish",
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
      className={`min-h-screen bg-gradient-to-b from-blue-50 to-white ${lang === 'zh' ? 'font-chinese' : 'font-english'}`}
      suppressHydrationWarning
    >
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold">{t.companyName}</h1>
            <div className="flex items-center gap-3 sm:gap-6">
              <nav className="hidden md:flex gap-6">
                <a href="#about" className="hover:text-blue-200 transition-colors">{t.nav.about}</a>
                <a href="#products" className="hover:text-blue-200 transition-colors">{t.nav.products}</a>
                <a href="#services" className="hover:text-blue-200 transition-colors">{t.nav.services}</a>
                <a href="#contact" className="hover:text-blue-200 transition-colors">{t.nav.contact}</a>
              </nav>
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="bg-blue-800 hover:bg-blue-900 px-3 sm:px-4 py-2 rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                {lang === 'zh' ? 'EN' : '中文'}
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-blue-800 pt-4">
              <div className="flex flex-col gap-3">
                <a
                  href="#about"
                  className="hover:text-blue-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.about}
                </a>
                <a
                  href="#products"
                  className="hover:text-blue-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.products}
                </a>
                <a
                  href="#services"
                  className="hover:text-blue-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.services}
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.contact}
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <a
              href="mailto:sales@tuna.com.tw"
              className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            {t.about.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-900">{t.companyName}</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                {t.about.p1}
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                {t.about.p2}
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {t.about.p3}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-xl mb-2 text-gray-800">{t.about.values.title}</h4>
                <p className="text-gray-600">{t.about.values.content}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-3">🌏</div>
                <h4 className="font-semibold text-xl mb-2 text-gray-800">{t.about.global.title}</h4>
                <p className="text-gray-600">{t.about.global.content}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-3">🚢</div>
                <h4 className="font-semibold text-xl mb-2 text-gray-800">{t.about.fleet.title}</h4>
                <p className="text-gray-600">{t.about.fleet.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            {t.products.title}
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Main Products */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-900">{t.products.mainTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {t.products.items.map((product, idx) => (
                  <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="mb-3 flex items-center justify-center" style={{ height: '64px' }}>
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
                          src="/AbacoreTuna.jpg"
                          alt="Albacore Tuna"
                          width={120}
                          height={64}
                          className="object-contain"
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
                    <h4 className="font-semibold text-lg text-gray-800">{product.name}</h4>
                    {product.en && <p className="text-gray-600 text-sm">{product.en}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Products */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">{t.products.otherTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  {t.products.others.slice(0, 7).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {t.products.others.slice(7).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pacific Salmon Varieties */}
            <div className="mt-6 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                {t.products.salmonTitle}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-bold text-gray-800">CHUM</p>
                  <p className="text-sm text-gray-600">Oncorhynchus keta</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-bold text-gray-800">PINK</p>
                  <p className="text-sm text-gray-600">Oncorhynchus gorbuscha</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-bold text-gray-800">SOCKEYE</p>
                  <p className="text-sm text-gray-600">Oncorhynchus nerka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t.services.title}
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                <div className="text-4xl mb-3">
                  {idx === 0 ? '🎣' : idx === 1 ? '🌾' : idx === 2 ? '🇪🇺' : '🇯🇵'}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">{t.services.vision.title}</h3>
            <p className="text-lg">{t.services.vision.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
            {t.contact.title}
          </h2>
          <a href="mailto:sales@tuna.com.tw" className="text-base sm:text-lg font-bold text-center mb-8 sm:mb-12 text-blue-600 hover:text-blue-800 transition-colors block mt-4">
            sales@tuna.com.tw
          </a>
          <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <p className="text-center text-base sm:text-lg mb-6 sm:mb-8 text-gray-700">
              {t.contact.welcome}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-blue-900">{t.contact.taiwan}</h4>
                {lang === 'zh' && <p className="text-sm sm:text-base text-gray-700">Taiwan Headquarters</p>}
              </div>
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-blue-900">{t.contact.canada}</h4>
                {lang === 'zh' && <p className="text-sm sm:text-base text-gray-700">Vancouver, Canada</p>}
              </div>
            </div>
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{t.contact.regions}</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {t.contact.countries.map((region, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">{t.companyName}</p>
          <p className="text-blue-200 text-sm mb-4">{t.footer.tagline}</p>
          <p className="text-blue-300 text-sm">© {new Date().getFullYear()} BigEye International. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
