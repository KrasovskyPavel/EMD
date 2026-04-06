// Feature badges data
const features = [
  { icon: "/icon-9.svg", label: "150 FREE SPINS" },
  { icon: "/icon-4.svg", label: "1000+ SLOTS" },
  { icon: "/icon-6.svg", label: "INSTANT PAYOUTS" },
];

export const WelcomeBonusPromotionSection = (): JSX.Element => {
  return (
    <section className="relative self-stretch w-full py-16 bg-[linear-gradient(90deg,rgba(255,105,0,1)_0%,rgba(245,73,0,1)_50%,rgba(231,0,11,1)_100%)] overflow-hidden">
      {/* Radial overlay */}
      <div className="absolute inset-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_0%,rgba(0,0,0,0)_0%)] opacity-10 pointer-events-none" />

      {/* Content container */}
      <div className="relative flex flex-col items-center w-full max-w-[1088px] mx-auto px-4 gap-0">
        {/* LIMITED TIME OFFER badge */}
        <div className="flex items-center gap-2 bg-[#ffffff33] rounded-full px-4 py-[9px] mb-6">
          <img
            className="w-4 h-4 flex-shrink-0"
            alt="Icon"
            src="/icon-11.svg"
          />
          <span className="[font-family:'Roboto_Condensed',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            LIMITED TIME OFFER
          </span>
        </div>

        {/* Main headline */}
        <h1 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-7xl text-center tracking-[0] leading-[72px] whitespace-nowrap mb-4">
          UP TO 150% BONUS
        </h1>

        {/* Sub headline */}
        <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-4xl text-center tracking-[0] leading-10 whitespace-nowrap mb-6">
          + $300,000 WELCOME PACKAGE
        </h2>

        {/* Description */}
        <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-[#ffffffe6] text-xl text-center tracking-[0] leading-[32.5px] max-w-[733px] mb-8">
          Join now and claim your exclusive welcome bonus! Play our premium
          slots and win big at the best online casinos.
        </p>

        {/* Feature badges */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                className="w-5 h-5 flex-shrink-0"
                alt="Icon"
                src={feature.icon}
              />
              <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Claim Bonus Now button */}
          <button className="flex items-center gap-2 bg-white rounded-lg shadow-[0px_25px_50px_-12px_#00000040] px-8 h-[68px] min-w-[280px] justify-center">
            <img
              className="w-7 h-7 flex-shrink-0"
              alt="Icon"
              src="/icon-10.svg"
            />
            <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-[#f54900] text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
              CLAIM BONUS NOW
            </span>
          </button>

          {/* View All Slots button */}
          <button className="flex items-center justify-center gap-3 px-10 h-[72px] min-w-[218px] rounded-lg border-[1.91px] border-solid border-white bg-transparent">
            <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
              VIEW ALL SLOTS
            </span>
          </button>
        </div>

        {/* Disclaimer */}
        <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-[#ffffffcc] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
          18+ | T&amp;C APPLY | NEW PLAYERS ONLY | GAMBLE RESPONSIBLY
        </p>
      </div>
    </section>
  );
};
