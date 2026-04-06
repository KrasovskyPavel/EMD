import {Button} from '../../../../components/ui/button';

export const ConclusionCtaSection = (): JSX.Element => {
    return (
        <section className="w-full bg-white py-14 md:py-20">
            <div className="flex flex-col items-center gap-6 md:gap-8 max-w-[832px] mx-auto px-4">
                {/* Section heading */}
                <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-3xl md:text-5xl text-center tracking-[0] leading-[1.1] md:leading-[48px]">
                    CONCLUSION
                </h2>

                {/* Body text paragraphs */}
                <div className="flex flex-col items-center gap-4 w-full">
                    <p className="w-full [font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[0] leading-7 md:leading-[29.2px]">
                        Hacksaw Gaming has firmly established itself as a
                        leading developer in the online casino industry. With a
                        wide variety of engaging slots, high-quality graphics,
                        innovative game mechanics, and demo versions for free
                        play, UK players have plenty of reasons to explore these
                        games.
                    </p>

                    <p className="w-full [font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[0] leading-7 md:leading-[29.2px]">
                        Whether you&apos;re trying a new release, testing
                        strategies in demo mode, or chasing big wins in high
                        volatility slots, Hacksaw Gaming offers a gaming
                        experience that is both entertaining and rewarding.
                    </p>
                </div>

                {/* CTA Button */}
                <a
                    href="https://bestslotgames.top/tfCbcTD2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-auto flex items-center gap-[11px] bg-[#4aaf6c] hover:bg-[#3d9a5e] rounded-[14px] px-6 md:px-12 py-3 md:py-[16px] cursor-pointer">
                    <img
                        className="w-5 h-5 flex-shrink-0"
                        alt="Icon"
                        src="/icon.svg"
                    />
                    <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-sm md:text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                        START PLAYING NOW
                    </span>
                </a>
            </div>
        </section>
    );
};
