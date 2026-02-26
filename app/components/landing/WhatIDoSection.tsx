export const WhatIDoSection = () => {
  const items = [
    {
      title: "VISUALS",
      description:
        "I search the internet for inspiration and combine my findings into a creative story.",
      dark: true,
    },
    {
      title: "PRODUCT",
      description:
        "I combine the best design practices: researching, designing, testing, and iterating until it works perfectly.",
      dark: false,
    },
    {
      title: "BRANDING",
      description:
        "I build brands that feel consistent across every touchpoint and tell a clear, compelling story.",
      dark: false,
    },
  ];

  return (
    <section className="mt-32 px-[250px]">
      <div className="px-[40px]">
        <p className="text-[10px] tracking-[0.24em] uppercase font-medium text-[#777777] mb-4">
          WHAT I DO
        </p>
      </div>

      <div className="border-t border-[#E5E5E5]">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`group flex items-stretch border-b border-[#E5E5E5] transition-colors duration-300 ${
              item.dark ? "bg-black text-white" : "bg-white text-black"
            } hover:bg-black hover:text-white`}
          >
            <div className="flex-1 px-[40px] py-10 flex items-center">
              <h2
                className={`font-helvetica uppercase tracking-[0.2em] text-[56px] leading-none ${
                  index === 0 ? "italic tracking-[0.12em]" : ""
                }`}
              >
                {item.title}
              </h2>
            </div>
            <div className="w-full max-w-[320px] px-[40px] py-10 flex items-center text-[12px] leading-relaxed group-hover:text-white/80">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

