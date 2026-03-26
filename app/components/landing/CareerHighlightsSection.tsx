const roles = [
  {
    period: "Now",
    title: "Product Designer",
    company: "ORANGE TREE SYSTEM",
  },
  {
    period: "2024",
    title: "UI UX Designer",
    company: "PRICOO",
  },
  {
    period: "2021",
    title: "UI Designer",
    company: "CIPHEROX",
  },
];

export const CareerHighlightsSection = () => {
  return (
    <section className="mt-32 bg-white">
      <div className=" py-[28px]">
        <div className="mx-auto w-full max-w-[860px] px-[40px]">
          <p className="text-[10px] tracking-[0.24em] uppercase font-medium text-[#9A9A9A] mb-6 font-helvetica">
            CAREER HIGHLIGHTS
          </p>

          <div className="border-t border-[#E8E8E8]" />

          <div>
            {roles.map((item) => (
              <div
                key={item.period + item.title}
                className="grid grid-cols-[160px_1fr] py-[22px] border-b border-[#E8E8E8] gap-24 items-center"
              >
                <div className="font-helvetica font-light text-[32px] leading-none text-[#000000]">
                  {item.period}
                </div>

                <div>
                  <div className="font-helvetica font-light text-[32px] leading-none text-[#000000]">
                    {item.title}
                  </div>
                  <div className="mt-2 font-helvetica text-[10px] tracking-[0.18em] uppercase text-[#000000]">
                    {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

