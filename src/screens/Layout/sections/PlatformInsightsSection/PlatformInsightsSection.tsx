import { Card, CardContent } from "../../../../components/ui/card";

// Overview table data
const overviewData = [
  { label: "Developer:", value: "Hacksaw Gaming", hasBorder: true },
  {
    label: "Game Type:",
    value: "Online Slots, Scratch Cards, Instant Games",
    hasBorder: true,
  },
  { label: "Platform:", value: "Mobile & Desktop", hasBorder: true },
  { label: "RTP:", value: "94% – 97%", hasBorder: true },
  { label: "Volatility:", value: "Medium to High", hasBorder: true },
  {
    label: "Demo Availability:",
    value: "Yes – Hacksaw Gaming Demo",
    hasBorder: true,
  },
  { label: "Popular Markets:", value: "UK, Europe, Global", hasBorder: true },
  {
    label: "Game Features:",
    value: "Free Spins, Multipliers, Bonus Rounds, Cascading Reels",
    hasBorder: false,
  },
];

// Slots overview bullet points
const slotsOverviewFeatures = [
  "Multiple paylines or cluster wins",
  "Bonus rounds and mini-games",
  "Free spins and multipliers",
  "High volatility for big win potential",
];

// Innovative mechanics bullet points
const innovativeMechanics = [
  {
    bold: "Cascading Reels:",
    text: " Winning symbols disappear, allowing new ones to fall and potentially trigger consecutive wins.",
  },
  {
    bold: "Multiplier Features:",
    text: " Increase winnings significantly during bonus rounds.",
  },
  {
    bold: "Interactive Bonuses:",
    text: " Mini-games and special features that add excitement and strategic elements to gameplay.",
  },
];

// Slot games list
const slotGamesList = [
  "Chaos Crew – High-energy urban theme with exciting bonus features",
  "Stick 'Em – Fun, quirky, and interactive gameplay",
  "JetX – Fast-paced instant win game",
];

// Best slots list
const bestSlotsList = [
  "Chaos Crew – Exciting features and high volatility",
  "Stick 'Em – Quirky visuals with interactive bonuses",
  "JetX – Instant win mechanics with simple yet thrilling gameplay",
];

// RTP mechanics list
const rtpMechanicsList = [
  "Cluster wins or paylines",
  "Cascading reels",
  "Free spins and multipliers",
  "Bonus mini-games",
];

// How to play steps
const howToPlaySteps = [
  "Visit a UK online casino featuring Hacksaw Gaming slots.",
  "Browse the Hacksaw Gaming slots list to select your preferred game.",
  "Set your bet size according to your budget.",
  "Spin the reels and watch for winning combinations.",
  "Trigger bonus features or free spins for additional rewards.",
  "Collect winnings or continue spinning for more chances to win.",
];

// Demo benefits
const demoBenefits = [
  "Learn the game mechanics",
  "Test strategies",
  "Enjoy free spins and bonus features",
  "No deposit required",
];

// Demo how to play steps
const demoHowToPlay = [
  "Open a UK online casino with Hacksaw Gaming games.",
  "Select your desired slot.",
  'Click "Play Demo" or "Free Play."',
  "Spin the reels and explore all bonus features without spending real money.",
];

// Mobile benefits
const mobileBenefits = [
  {
    text: "Responsive design that adapts to any device, from iOS to Android",
    multiLine: false,
  },
  {
    text: "Touch-friendly controls for easy betting and spinning",
    multiLine: false,
  },
  {
    text: "Full access to demos and real money play, so you can try Hacksaw Gaming demo or enjoy real wins anywhere",
    multiLine: false,
  },
  {
    text: "Consistent quality – the mobile experience mirrors the desktop version, including animations, sound effects, and bonus features",
    multiLine: true,
  },
];

// Why choose features
const whyChooseFeatures = [
  {
    icon: "/icon-7.svg",
    title: "INNOVATIVE FEATURES",
    description: "Unique mechanics and interactive bonuses",
  },
  {
    icon: "/icon-1.svg",
    title: "HIGH-QUALITY VISUALS",
    description: "Vibrant graphics and animations",
  },
  {
    icon: "/icon-5.svg",
    title: "VARIETY",
    description: "Slots, scratch cards, and instant win games",
  },
  {
    icon: "/icon-13.svg",
    title: "ACCESSIBILITY",
    description: "Fully mobile-friendly",
  },
  {
    icon: "/icon-2.svg",
    title: "FREE DEMOS",
    description: "Try games before playing with real money",
  },
  {
    icon: "/icon-3.svg",
    title: "EXCITING VOLATILITY",
    description: "Options for both casual players and high-stakes gamblers",
  },
];

export const PlatformInsightsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 pt-20 pb-0 px-16 w-full bg-white">
      <div className="flex flex-col items-start gap-6 w-full">
        {/* WHAT IS HACKSAW GAMING? */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h1 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            WHAT IS HACKSAW GAMING?
          </h1>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming is a leading provider of online casino games, known
            for creating innovative, engaging, and high-quality slots. Founded
            in 2018, the company has quickly become a favourite among UK players
            thanks to its mobile-first approach and unique game mechanics.
            Hacksaw Gaming focuses on delivering fast-loading games with
            exciting features, ensuring players enjoy both desktop and mobile
            gameplay.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Whether you are a casual player looking for fun or a high-stakes
            gambler chasing big wins, Hacksaw Gaming offers something for
            everyone. Their games are not only visually appealing but also
            designed to maximize entertainment and engagement.
          </p>
        </div>

        {/* HACKSAW GAMING OVERVIEW card */}
        <Card className="w-full bg-white rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] border-0">
          <CardContent className="flex flex-col gap-8 pt-12 pb-12 px-12">
            <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-3xl text-center tracking-[0] leading-9 w-full">
              HACKSAW GAMING OVERVIEW
            </h2>
            <div className="flex flex-col gap-4 w-full">
              {overviewData.map((row, index) => (
                <div
                  key={index}
                  className={`flex items-start w-full py-2 ${row.hasBorder ? "border-b border-border" : ""}`}
                >
                  <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-lg tracking-[0] leading-7 w-72 shrink-0">
                    {row.label}
                  </span>
                  <span className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 flex-1">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* HACKSAW GAMING SLOTS OVERVIEW */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            HACKSAW GAMING SLOTS OVERVIEW
          </h2>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming slots are famous for their dynamic gameplay and
            unique themes. The studio offers a mix of classic slots and
            innovative video slots, each with distinctive visuals and audio
            effects. Players can enjoy immersive themes ranging from urban chaos
            in Chaos Crew to fun and quirky animations in Stick&apos;Em.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            These slots often feature:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {slotsOverviewFeatures.map((item, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            UK casinos increasingly highlight Hacksaw Gaming slots in their
            featured sections, reflecting the growing popularity of these games
            among local players.
          </p>
        </div>

        {/* KEY FEATURES OF HACKSAW GAMING GAMES */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            KEY FEATURES OF HACKSAW GAMING GAMES
          </h2>

          {/* INNOVATIVE MECHANICS */}
          <h3 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-xl tracking-[0] leading-7">
            INNOVATIVE MECHANICS
          </h3>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming is known for breaking traditional slot rules with
            innovative mechanics. Examples include:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {innovativeMechanics.map((item, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                <span className="font-bold">{item.bold}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            These features make Hacksaw Gaming slots stand out in the crowded
            online casino market.
          </p>

          {/* HIGH VOLATILITY OPTIONS */}
          <h3 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-xl tracking-[0] leading-7">
            HIGH VOLATILITY OPTIONS
          </h3>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            For thrill-seekers, Hacksaw Gaming offers high volatility slots
            where wins are less frequent but often larger. Games like Chaos Crew
            provide the perfect mix of risk and reward, appealing to UK players
            looking for big payouts.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            High volatility games are ideal for players who enjoy tension and
            suspense, as each spin could potentially lead to a huge win.
          </p>

          {/* ENGAGING VISUAL STYLE */}
          <h3 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-xl tracking-[0] leading-7">
            ENGAGING VISUAL STYLE
          </h3>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming places a strong emphasis on graphics and animations.
            Each slot is designed with vibrant colours, smooth motion, and
            thematic soundtracks. From urban chaos to quirky characters, these
            games capture the player&apos;s attention from the first spin.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            The combination of aesthetics, animations, and sound effects ensures
            that players are fully immersed in the experience, making every spin
            engaging.
          </p>
        </div>

        {/* HACKSAW GAMING SLOT GAMES LIST */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            HACKSAW GAMING SLOT GAMES LIST
          </h2>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming offers a growing library of slots and scratch cards.
            Some of the most popular titles include:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {slotGamesList.map((item, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* HACKSAW GAMING NEW SLOTS */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            HACKSAW GAMING NEW SLOTS
          </h2>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming regularly releases new slot titles. Recent new
            releases are designed to keep the gaming experience fresh, combining
            innovative mechanics with high-quality visuals.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            UK players can try Hacksaw Gaming new slot releases for free in demo
            mode before playing with real money. This allows them to understand
            the mechanics, volatility, and bonus features of each game.
          </p>
        </div>

        {/* HACKSAW GAMING BEST SLOTS */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            HACKSAW GAMING BEST SLOTS
          </h2>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            The best Hacksaw Gaming slots are determined by their RTP,
            engagement, and popularity among UK players. Top titles include:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {bestSlotsList.map((item, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            These best Hacksaw Gaming slots are often recommended for both
            beginners and experienced players due to their balance of
            entertainment and winning potential.
          </p>
        </div>

        {/* HACKSAW GAMING RTP AND GAME MECHANICS */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            HACKSAW GAMING RTP AND GAME MECHANICS
          </h2>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming slots generally offer RTP (Return to Player) rates
            between 94% and 97%, giving players a fair chance to win.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Mechanics across games vary:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {rtpMechanicsList.map((item, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            High volatility slots appeal to players looking for big payouts,
            while medium volatility options provide steady wins for casual
            players.
          </p>
        </div>

        {/* HOW TO PLAY HACKSAW GAMING SLOTS */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            HOW TO PLAY HACKSAW GAMING SLOTS
          </h2>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Step-by-step guide:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {howToPlaySteps.map((step, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {step}
              </li>
            ))}
          </ul>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            For beginners, starting with Hacksaw Gaming demo versions is
            recommended to practice strategies and understand game mechanics
            without risking real money.
          </p>
        </div>

        {/* PLAY HACKSAW GAMING DEMO */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            PLAY HACKSAW GAMING DEMO
          </h2>

          {/* HACKSAW GAMING DEMO VERSIONS */}
          <h3 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-xl tracking-[0] leading-7">
            HACKSAW GAMING DEMO VERSIONS
          </h3>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming demo slots are available at most UK casinos. These
            free play versions let you experience all features of a game without
            placing real bets.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Benefits of playing Hacksaw Gaming demo:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {demoBenefits.map((item, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* HACKSAW GAMING SLOT DEMO – HOW TO PLAY */}
          <h3 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-xl tracking-[0] leading-7">
            HACKSAW GAMING SLOT DEMO – HOW TO PLAY
          </h3>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            To play a demo:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {demoHowToPlay.map((step, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {step}
              </li>
            ))}
          </ul>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Demo play is perfect for both new players and seasoned gamblers who
            want to try new Hacksaw Gaming releases before betting real money.
          </p>
        </div>

        {/* HACKSAW GAMING ON MOBILE */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10">
            HACKSAW GAMING ON MOBILE
          </h2>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Hacksaw Gaming is designed with a mobile-first approach, making it
            perfect for players in the UK who prefer gaming on the go. All slots
            are fully optimized for smartphones and tablets, ensuring smooth
            gameplay, fast loading times, and clear graphics on smaller screens.
          </p>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Key benefits of playing Hacksaw Gaming on mobile include:
          </p>
          <ul className="flex flex-col gap-2 pl-6 w-full">
            {mobileBenefits.map((item, index) => (
              <li
                key={index}
                className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]"
              >
                {item.text}
              </li>
            ))}
          </ul>
          <p className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.2px]">
            Whether you&apos;re commuting, relaxing at home, or taking a break,
            Hacksaw Gaming on mobile lets you enjoy your favourite slots
            anytime, without sacrificing quality or features.
          </p>
        </div>

        {/* WHY CHOOSE HACKSAW GAMING GAMES */}
        <div className="flex flex-col items-start gap-8 w-full pb-20">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-4xl tracking-[0] leading-10 w-full text-center">
            WHY CHOOSE HACKSAW GAMING GAMES
          </h2>
          <Card className="w-full bg-white rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] border-0">
            <CardContent className="flex flex-col gap-6 pt-12 pb-12 px-12">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 w-full">
                  <img
                    className="w-6 h-6 mt-1 shrink-0"
                    alt="Icon"
                    src={feature.icon}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="[font-family:'Roboto_Condensed',Helvetica] font-black text-black text-lg tracking-[0] leading-7">
                      {feature.title}
                    </span>
                    <span className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
