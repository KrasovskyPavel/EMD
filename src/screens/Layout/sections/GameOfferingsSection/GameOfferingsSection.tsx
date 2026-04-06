import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Game offerings data
const gameOfferings = [
  {
    id: "slots",
    title: "SLOTS",
    description:
      "Mobile-friendly games with gripping gameplay and immersive themes - our slots provide maximum entertainment.",
    image: "/imagewithfallback-1.png",
  },
  {
    id: "scratchcards",
    title: "SCRATCHCARDS",
    description:
      "Blending all the fun of instant win games with cool themes, Hacksaw Gaming Scratchcards offer massive potential. Simply scratch and win!",
    image: "/imagewithfallback-2.png",
  },
  {
    id: "instant-win",
    title: "INSTANT WIN",
    description:
      "Our instant win range puts YOU in full control. Do you cash out early or hold your nerve?",
    image: "/imagewithfallback-3.png",
  },
];

export const GameOfferingsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* Green background band */}
      <div className="absolute top-[322px] left-0 w-full h-48 bg-green-500" />

      <div className="relative w-full max-w-[1280px] mx-auto px-8 flex flex-col gap-12">
        {/* Header row */}
        <div className="flex items-start justify-between w-full">
          <div className="flex-shrink-0">
            <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-7xl tracking-[-1.80px] leading-[72px] whitespace-nowrap">
              WHAT WE DO
            </h2>
          </div>

          <div className="max-w-[664px]">
            <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
              We build slots, scratchcards and instant win games for the largest
              brands and governments in the iGaming industry. Our games are
              powered by our industry-leading Remote Gaming Server platform.
            </p>
          </div>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {gameOfferings.map((offering) => (
            <Card
              key={offering.id}
              className="rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(180deg,rgba(30,41,57,1)_0%,rgba(0,0,0,1)_100%)] border-0 p-0"
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* Image area with gradient overlay */}
                <div
                  className="w-full h-72 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${offering.image})` }}
                >
                  <div className="w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0)_100%)]" />
                </div>

                {/* Content area */}
                <div className="flex flex-col px-8 pt-8 pb-8 flex-1">
                  {/* Title */}
                  <h3 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-3xl text-center tracking-[0.75px] leading-9 mb-4">
                    {offering.title}
                  </h3>

                  {/* Description */}
                  <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-[#d1d5dc] text-sm text-center tracking-[0] leading-[22.8px] mb-6 flex-1">
                    {offering.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    className="w-full h-auto bg-white hover:bg-gray-100 text-black rounded-lg py-3 [font-family:'Roboto_Condensed',Helvetica] font-bold text-sm text-center tracking-[0] leading-5"
                    variant="ghost"
                  >
                    TRY THEM NOW!
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
