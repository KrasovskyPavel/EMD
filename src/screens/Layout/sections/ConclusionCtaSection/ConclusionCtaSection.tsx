import { Button } from "../../../../components/ui/button";

export const ConclusionCtaSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20">
      <div className="flex flex-col items-center gap-8 max-w-[832px] mx-auto px-4">
        {/* Section heading */}
        <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-5xl text-center tracking-[0] leading-[48px] whitespace-nowrap">
          CONCLUSION
        </h2>

        {/* Body text paragraphs */}
        <div className="flex flex-col items-center gap-4 w-full">
          <p className="w-full [font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[29.2px]">
            Hacksaw Gaming has firmly established itself as a leading developer
            in the online casino industry. With a wide variety of engaging
            slots, high-quality graphics, innovative game mechanics, and demo
            versions for free play, UK players have plenty of reasons to explore
            these games.
          </p>

          <p className="w-full [font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[29.2px]">
            Whether you&apos;re trying a new release, testing strategies in demo
            mode, or chasing big wins in high volatility slots, Hacksaw Gaming
            offers a gaming experience that is both entertaining and rewarding.
          </p>
        </div>

        {/* CTA Button */}
        <Button className="h-auto flex items-center gap-[11px] bg-[#4aaf6c] hover:bg-[#3d9a5e] rounded-[14px] px-12 py-[16px] cursor-pointer">
          <img className="w-5 h-5 flex-shrink-0" alt="Icon" src="/icon.svg" />
          <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
            START PLAYING NOW
          </span>
        </Button>
      </div>
    </section>
  );
};
