import { Button } from "../../../../components/ui/button";

export const HeroPromoSection = (): JSX.Element => {
  return (
    <section className="relative self-stretch w-full h-[600px] bg-white overflow-hidden flex items-center justify-center">
      {/* Background image layer */}
      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          background: "url(../imagewithfallback.png) 50% 50% / cover",
        }}
      />

      {/* White overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#ffffffcc]" />

      {/* Decorative blur circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4aaf6c0d] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[200px] left-0 w-[400px] h-[400px] bg-[#1018280d] rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-0 w-full max-w-[896px] px-4">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-green-50 rounded-full border border-[#b9f8cf] px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-[#4aaf6c] rounded-full opacity-[0.81] flex-shrink-0" />
          <span className="[font-family:'Roboto_Condensed',Helvetica] font-semibold text-[#4aaf6c] text-sm text-center tracking-[0.35px] leading-5 whitespace-nowrap">
            NEW GAMES AVAILABLE
          </span>
        </div>

        {/* Headline */}
        <h1 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-[86px] text-black text-center tracking-[-2.40px] leading-[120px] [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] mb-8">
          HACKSAW GAMING
          <br />
          PLAY DEMOS &amp; EXPLORE GAMES
        </h1>

        {/* CTA Button */}
        <Button
          className="h-auto flex items-center gap-3 bg-[#4aaf6c] hover:bg-[#3d9a5e] rounded-[14px] px-8 py-5 cursor-pointer"
          asChild={false}
        >
          <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
            EXPLORE GAMES
          </span>
          <img className="w-5 h-5" alt="Icon" src="/icon-8.svg" />
        </Button>
      </div>
    </section>
  );
};
