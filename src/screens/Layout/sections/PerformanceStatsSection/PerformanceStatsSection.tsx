const stats = [
    {value: '+250', label: 'GAMES', showDivider: true},
    {value: '+3,000', label: 'OPERATOR BRANDS', showDivider: true},
    {value: '+35', label: 'REGULATED MARKETS', showDivider: false},
];

export const PerformanceStatsSection = (): JSX.Element => {
    return (
        <section className="w-full bg-white py-14 md:py-16 flex flex-col items-center">
            {/* Heading */}
            <div className="flex flex-col items-center gap-6 w-full max-w-[1216px] px-4">
                <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl md:text-5xl lg:text-6xl text-center tracking-[0] leading-[1.05] md:leading-[60px]">
                    DISRUPTIVE GAMING
                </span>

                {/* Subtitle */}
                <div className="flex flex-col items-center">
                    <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[0] leading-7 md:leading-[29.2px]">
                        We are a premium supplier of slots, scratchcards and
                        instant win games
                    </p>
                    <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[0] leading-7 md:leading-[29.2px]">
                        to the online gaming industry.
                    </p>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch w-full max-w-[1216px] px-4 mt-10 md:mt-16 divide-y md:divide-y-0 md:divide-x divide-[#d1d5dc]">
                {stats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                        {/* Stat content */}
                        <div className="flex flex-col items-center gap-2 md:gap-4 flex-1 py-6 md:py-8">
                            <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-6xl md:text-7xl lg:text-8xl text-center tracking-[0] leading-[1.1] md:leading-[96px] whitespace-nowrap">
                                {stat.value}
                            </span>
                            <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-base md:text-lg text-center tracking-[0.90px] leading-6 md:leading-7 whitespace-nowrap">
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
