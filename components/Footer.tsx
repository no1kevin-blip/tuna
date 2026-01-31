'use client';

interface FooterProps {
  companyName: string;
  tagline: string;
}

export default function Footer({ companyName, tagline }: FooterProps) {
  return (
    <footer className="relative bg-blue-950 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-sky-400 to-transparent"></div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-950 via-blue-950 to-slate-900/90"></div>

      <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto relative z-10">
        {/* Main content area with generous spacing */}
        <div className="py-10 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative accent */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-sky-400/40"></div>
              <div className="w-2 h-2 bg-sky-400/60 rotate-45"></div>
              <div className="w-12 h-px bg-sky-400/40"></div>
            </div>

            {/* Company name */}
            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4 tracking-wide text-white">
              {companyName}
            </h3>

            {/* Tagline - separated with breathing room */}
            <p className="text-sky-200/90 text-sm sm:text-base font-light tracking-[0.3em] uppercase mb-8 leading-relaxed">
              {tagline}
            </p>

            {/* Email - clear separation and prominence */}
            <div className="mb-3">
              <a
                href="mailto:sales@tuna.com.tw"
                className="group inline-flex items-center gap-3 text-white hover:text-sky-300 transition-all duration-500 text-base sm:text-lg font-light tracking-wide"
              >
                <span className="w-0 h-px bg-sky-400 transition-all duration-500 group-hover:w-8"></span>
                <span className="relative">
                  sales@tuna.com.tw
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-sky-400 transition-all duration-500 group-hover:w-full"></span>
                </span>
                <span className="w-0 h-px bg-sky-400 transition-all duration-500 group-hover:w-8"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar - clean separation */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-slate-400 text-sm font-light order-2 sm:order-1">
              © {new Date().getFullYear()} BigEye International. All rights reserved.
            </p>

            {/* Decorative elements */}
            <div className="flex items-center gap-2.5 order-1 sm:order-2">
              <div className="w-2 h-2 bg-sky-400/40 rotate-45 transition-all duration-300 hover:bg-sky-400/60"></div>
              <div className="w-2 h-2 bg-sky-400/50 rotate-45 transition-all duration-300 hover:bg-sky-400/70"></div>
              <div className="w-2 h-2 bg-sky-400/60 rotate-45 transition-all duration-300 hover:bg-sky-400/80"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

