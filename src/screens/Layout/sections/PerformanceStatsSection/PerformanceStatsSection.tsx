import { Separator } from "../../../../components/ui/separator";

const stats = [
  { value: "+250", label: "GAMES", showDivider: true },
  { value: "+3,000", label: "OPERATOR BRANDS", showDivider: true },
  { value: "+35", label: "REGULATED MARKETS", showDivider: false },
];

export const PerformanceStatsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[1216px] px-4">
        <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-6xl text-center tracking-[0] leading-[60px] whitespace-nowrap">
          DISRUPTIVE GAMING
        </h2>

        {/* Subtitle */}
        <div className="flex flex-col items-center">
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[29.2px]">
            We are a premium supplier of slots, scratchcards and instant win
            games
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[29.2px]">
            to the online gaming industry.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-center w-full max-w-[1216px] px-4 mt-16">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center flex-1">
            {/* Stat content */}
            <div className="flex flex-col items-center gap-4 flex-1 py-8">
              <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-8xl text-center tracking-[0] leading-[96px] whitespace-nowrap">
                {stat.value}
              </span>
              <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-lg text-center tracking-[0.90px] leading-7 whitespace-nowrap">
                {stat.label}
              </span>
            </div>

            {/* Vertical divider */}
            {stat.showDivider && (
              <Separator
                orientation="vertical"
                className="h-24 bg-[#d1d5dc] w-px"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
