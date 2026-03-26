export const ExperienceSection = () => {
  return (
    <section
      className="relative mt-32 h-screen text-[#FFFFFFB2] overflow-hidden flex items-center justify-center bg-black bg-contain"
      style={{
        backgroundImage: "url('/ammar.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "80% center",
      }}
    >

      <div className="relative max-w-[420px] text-center px-6 flex flex-col juqstify-end">
        <div className="flex flex-col items-center gap-3">
          <h2
            className="italic text-[121px] leading-[87%] tracking-[-1.21px]"
            style={{
              fontFamily:
              '"Saol Display", "Helvetica Neue", "Helvetica", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
            >
            Experience
          </h2>
          <div className="h-[2px] bg-white w-[540px] -mt-4" />
        </div>

        <p className="mt-5 font-helvetica font-light text-[48px] leading-[73%] tracking-[-2px] text-start max-w-[286px] ml-auto">
          Over the years of experience in interactive design and working with some of the most of the amazing people 
        </p>
      </div>
    </section>
  );
};