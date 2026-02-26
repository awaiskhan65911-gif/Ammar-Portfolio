
export const HeroSection = () => {
    return (
        <section className="">
            <div className="relative">
            <div className="relative">
            <h3 className="absolute top-5 left-8 text-[13px] font-medium leading-[133%] font-helvetica">Hello, I’m</h3>
            <h1 className="font-helvetica font-light italic uppercase text-[96px] tracking-[-9px]">Aimii Sheikh</h1>
            </div>
            <h1 className="font-helvetica font-light italic uppercase text-[96px] tracking-[-9px] absolute right-0 inline top-20">Rapid Planner</h1>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[448px] mx-auto">
            <div>
                <img src="/HeroImg.png" alt="Hero Image" className="h-auto mt-36" />
            </div>
            <p className="text-[14px] font-medium leading-[146%] text-[#000000]">At Orange Tree Systems, I design the digital Products, as a product designer at OTS. I build the U/UX design process and shaped the brands vision, but there is so much to me then just a few. </p>
            </div>
        </section>
    )
}