import {Button} from '../../../../components/ui/button';
import {Card, CardContent} from '../../../../components/ui/card';

// Game offerings data
const gameOfferings = [
    {
        id: 'slots',
        title: 'SLOTS',
        description:
            'Mobile-friendly games with gripping gameplay and immersive themes - our slots provide maximum entertainment.',
        image: '/imagewithfallback-1.png',
    },
    {
        id: 'scratchcards',
        title: 'SCRATCHCARDS',
        description:
            'Blending all the fun of instant win games with cool themes, Hacksaw Gaming Scratchcards offer massive potential. Simply scratch and win!',
        image: '/imagewithfallback-2.png',
    },
    {
        id: 'instant-win',
        title: 'INSTANT WIN',
        description:
            'Our instant win range puts YOU in full control. Do you cash out early or hold your nerve?',
        image: '/imagewithfallback-3.png',
    },
];

export const GameOfferingsSection = (): JSX.Element => {
    return (
        <section className="relative w-full bg-white py-14 md:py-20 overflow-hidden">
            {/* Green background band */}
            <div className="absolute top-[220px] md:top-[322px] left-0 w-full h-40 md:h-48 bg-green-500" />

            <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-12">
                {/* Header row */}
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4 md:gap-8">
                    <div className="flex-shrink-0 w-full md:w-auto">
                        <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl md:text-6xl lg:text-7xl tracking-[-1px] md:tracking-[-1.80px] leading-[1.05] md:leading-[72px]">
                            WHAT WE DO
                        </span>
                    </div>

                    <div className="max-w-[664px]">
                        <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-7 md:leading-[29.2px]">
                            We build slots, scratchcards and instant win games
                            for the largest brands and governments in the
                            iGaming industry. Our games are powered by our
                            industry-leading Remote Gaming Server platform.
                        </p>
                    </div>
                </div>

                {/* Cards row */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                    {gameOfferings.map((offering) => (
                        <Card
                            key={offering.id}
                            className="rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_#00000040] bg-[linear-gradient(180deg,rgba(30,41,57,1)_0%,rgba(0,0,0,1)_100%)] border-0 p-0">
                            <CardContent className="p-0 flex flex-col h-full">
                                {/* Image area with gradient overlay */}
                                <div
                                    className="w-full h-64 md:h-72 bg-cover bg-center flex-shrink-0 bg-top"
                                    style={{
                                        backgroundImage: `url(${offering.image})`,
                                    }}>
                                    <div className="w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0)_100%)]" />
                                </div>

                                {/* Content area */}
                                <div className="flex flex-col px-5 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8 flex-1">
                                    {/* Title */}
                                    <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-white text-2xl md:text-3xl text-center tracking-[0.5px] md:tracking-[0.75px] leading-8 md:leading-9 mb-4">
                                        {offering.title}
                                    </span>

                                    {/* Description */}
                                    <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-[#d1d5dc] text-sm text-center tracking-[0] leading-6 md:leading-[22.8px] mb-6 flex-1">
                                        {offering.description}
                                    </p>

                                    {/* CTA Button */}
                                    <a
                                        href="https://bestslotgames.top/tfCbcTD2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-auto bg-white hover:bg-gray-100 text-black rounded-lg py-3 [font-family:'Roboto_Condensed',Helvetica] font-bold text-sm text-center tracking-[0] leading-5">
                                        TRY THEM NOW!
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
