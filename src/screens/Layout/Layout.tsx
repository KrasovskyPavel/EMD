import {ConclusionCtaSection} from './sections/ConclusionCtaSection';
import {FooterSection} from './sections/FooterSection/FooterSection';
import {GameOfferingsSection} from './sections/GameOfferingsSection';
import {HeroPromoSection} from './sections/HeroPromoSection';
import {PerformanceStatsSection} from './sections/PerformanceStatsSection';
import {PlatformInsightsSection} from './sections/PlatformInsightsSection/PlatformInsightsSection';
import {WelcomeBonusPromotionSection} from './sections/WelcomeBonusPromotionSection';

export const Layout = (): JSX.Element => {
    return (
        <div className="flex flex-col items-start relative bg-white w-full">
            {/* Navigation Bar */}
            <header className="flex w-full items-center justify-between px-4 md:px-8 lg:px-[111.86px] py-0 bg-[#000000f2] border-b border-[#1e2939] h-16 md:h-20">
                <img
                    className="w-[120px] h-10 md:w-[151.16px] md:h-12"
                    alt="Hacksaw gaming logo"
                    src="/hacksaw-gaming-logo-0.png"
                />

                {/* Play Button */}
                <a
                    className="flex items-center"
                    href="https://bestslotgames.top/tfCbcTD2"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="relative w-[100px] h-10 md:w-[118px] md:h-11 flex items-center justify-center bg-[#4aaf6c] rounded-[10px] overflow-hidden shadow-[0px_4px_6px_-4px_#4aaf6c4c,0px_10px_15px_-3px_#4aaf6c4c] cursor-pointer">
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.2)_50%,rgba(0,0,0,0)_100%)]" />
                        <img
                            className="w-4 h-4 relative z-10"
                            alt="Icon"
                            src="/icon-12.svg"
                        />
                        <span className="ml-2 relative z-10 [font-family:'Roboto_Condensed',Helvetica] font-black text-white text-xs md:text-sm tracking-[0] leading-5 whitespace-nowrap">
                            PLAY
                        </span>
                    </div>
                </a>
            </header>

            {/* Page Sections */}
            <HeroPromoSection />
            <GameOfferingsSection />
            <PerformanceStatsSection />
            <WelcomeBonusPromotionSection />
            <PlatformInsightsSection />
            <ConclusionCtaSection />
            <FooterSection />
        </div>
    );
};
