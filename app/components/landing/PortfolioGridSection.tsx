const projectImages = Array.from({ length: 16 }, (_, i) => `/project-${i + 1}.png`);

export const PortfolioGridSection = () => {
  return (
    <section className="mt-32 bg-white">
      <div className="max-w-screen">
        <p className="text-center text-[16px] tracking-[0.22em] uppercase font-Futura font-light text-[#222222B8] mb-10">
          SEE WHAT I&apos;M DOING
        </p>

        <div className="relative">
          <div className="grid grid-cols-4 bg-white">
            {projectImages.map((src) => (
              <div
                key={src}
                className="relative w-full aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt="Project"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Cloudy haze (top + bottom) */}
          <div
            className="pointer-events-none absolute -top-1 left-0 right-0 h-[150px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.0))",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[150px] "
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.0))",
            }}
          />
        </div>

        <div className="flex justify-center mt-10 pb-8">
          <button className="bg-black text-white text-[10px] tracking-[0.22em] uppercase font-helvetica px-8 py-3">
            WATCH PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
};

