import {Button} from '../../../../components/ui/button';

export const HeroPromoSection = (): JSX.Element => {
    return (
        <section className="relative self-stretch w-full min-h-[520px] md:min-h-[600px] bg-white overflow-hidden flex items-center justify-center py-16 md:py-20">
            {/* Background image layer */}
            <div
                className="absolute inset-0 w-full h-full opacity-20"
                style={{
                    background: 'url(../imagewithfallback.png) 50% 50% / cover',
                }}
            />

            {/* White overlay */}
            <div className="absolute inset-0 w-full h-full bg-[#ffffffcc]" />

            {/* Decorative blur circles */}
            <div className="absolute top-0 right-0 w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-[#4aaf6c0d] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-[220px] left-0 w-[240px] h-[240px] md:top-[200px] md:w-[400px] md:h-[400px] bg-[#1018280d] rounded-full blur-3xl pointer-events-none" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-0 w-full max-w-[896px] px-4 md:px-6">
                {/* Badge */}
                <div className="flex items-center gap-2 bg-green-50 rounded-full border border-[#b9f8cf] px-3 py-2 md:px-4 mb-6 md:mb-8">
                    <div className="w-2 h-2 bg-[#4aaf6c] rounded-full opacity-[0.81] flex-shrink-0" />
                    <span className="[font-family:'Roboto_Condensed',Helvetica] font-semibold text-[#4aaf6c] text-xs md:text-sm text-center tracking-[0.35px] leading-5 whitespace-nowrap">
                        NEW GAMES AVAILABLE
                    </span>
                </div>

                {/* Headline */}
                <h1 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-[40px] sm:text-[56px] lg:text-[86px] text-black text-center tracking-[-1.2px] sm:tracking-[-1.8px] lg:tracking-[-2.40px] leading-[1.1] lg:leading-[120px] [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] mb-6 md:mb-8">
                    HACKSAW GAMING
                    <br />
                    PLAY DEMOS &amp; EXPLORE GAMES
                </h1>

                {/* CTA Button */}
                <Button
                    className="h-auto flex items-center gap-2 md:gap-3 bg-[#4aaf6c] hover:bg-[#3d9a5e] rounded-[14px] px-5 md:px-8 py-3.5 md:py-5 cursor-pointer"
                    asChild={false}>
                    <a
                        href="https://bestslotgames.top/tfCbcTD2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-base md:text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                        EXPLORE GAMES
                    </a>
                    <img
                        className="w-4 h-4 md:w-5 md:h-5"
                        alt="Icon"
                        src="/icon-8.svg"
                    />
                </Button>
            </div>
        </section>
    );
};
