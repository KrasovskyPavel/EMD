// Footer section with background images, legal text, and compliance logos
const legalLines = [
    {
        id: 'copyright',
        content: (
            <>
                <span className="text-white">
                    © 2026 Hacksaw Gaming Ltd. All rights reserved. View our{' '}
                </span>
                <span className="text-[#51a2ff] underline">privacy policy</span>
                <span className="text-white"> and our </span>
                <span className="text-[#51a2ff] underline">cookie policy</span>
                <span className="text-white">.</span>
            </>
        ),
    },
    {
        id: 'malta-address-1',
        content: (
            <span className="text-white">
                HSKW Ltd. is a company incorporated in Malta with company
                registration number C84511 having its registered address at
            </span>
        ),
    },
    {
        id: 'malta-address-2',
        content: (
            <span className="text-white">
                171, Old Bakery Street, Suite 3, Central Business Centre, Mdina
                Road, Zebbug ZBG0915 MALTA.
            </span>
        ),
    },
    {
        id: 'mga-license',
        content: (
            <span className="text-white">
                HSKW Ltd. is licensed and regulated by the Malta Gaming
                Authority (MGA), holding License number MGA/CRP/39/2016, issued
                on the 2018-12-06
            </span>
        ),
    },
    {
        id: 'gb-license',
        content: (
            <span className="text-white">
                HSKW Ltd. is licensed and regulated in Great Britain by the
                Gambling Commission under account number 54925
            </span>
        ),
    },
    {
        id: 'greece-license',
        content: (
            <span className="text-white">
                HSKW Ltd is licensed and regulated in Greece by the Hellenic
                Gaming Commission with License number HGC-000035-04
            </span>
        ),
    },
    {
        id: 'iom-license',
        content: (
            <span className="text-white">
                HSKW Ltd is a company registered in the Isle of Man. It is
                authorised by the Gambling Supervisory Commission of the Isle of
                Man as a Software Supply Licensee and is valid up to the
                2027-01-01.
            </span>
        ),
    },
];

const complianceLogos = [
    {
        src: '/safer-gambling.png',
        alt: 'Safer gambling',
        className: 'w-8 h-8 object-cover',
    },
    {
        src: '/gambling-commission.png',
        alt: 'Gambling commission',
        className: 'w-[81px] h-6 object-cover',
    },
    {
        src: '/te-teri-taiwhenua.png',
        alt: 'Te teri taiwhenua',
        className: 'w-[82px] h-6 object-cover',
    },
    {
        src: '/problem-gambling-nz.png',
        alt: 'Problem gambling nz',
        className: 'w-[92px] h-6 object-cover',
    },
    {src: '/wecare.png', alt: 'Wecare', className: 'w-[99px] h-6 object-cover'},
    {src: '/ecogra.png', alt: 'Ecogra', className: 'w-[79px] h-6 object-cover'},
    {src: '/image-4.png', alt: 'Image', className: 'w-[125px] h-12'},
    {src: '/gamcare.png', alt: 'Gamcare', className: 'w-[83px] h-6'},
    {src: '/gamban.png', alt: 'Gamban', className: 'w-20 h-6'},
    {src: '/gordonmoody.png', alt: 'Gordon moody', className: 'w-[70px] h-6'},
    {
        src: '/betblocker.png',
        alt: 'Betblocker',
        className: 'w-[100px] h-4 object-cover',
    },
];

export const FooterSection = (): JSX.Element => {
    return (
        <footer className="relative flex flex-col w-full items-start gap-2.5 px-0 md:px-6 lg:px-20 py-0 bg-transparent ">
            {/* Background rectangle SVG */}
            <img
                className="object-cover absolute left-0 bottom-px w-full h-full min-h-[620px] md:min-h-[531px]"
                alt="Rectangle"
                src="/rectangle-2.png"
            />

            {/* Right side decorative image */}
            <img
                className="absolute right-0 bottom-px w-[520px] md:w-[800px] h-[420px] md:h-[670px] object-cover opacity-60 md:opacity-100"
                alt="Image"
                src="/image-6.png"
            />

            {/* Dark gradient overlay */}
            <div className="bg-[linear-gradient(0deg,rgba(0,0,0,1)_10%,rgba(10,21,37,0.1)_100%)] absolute left-0 bottom-px w-full h-full min-h-[620px] md:min-h-[531px]" />

            {/* Main content container */}
            <div className="flex flex-col w-full max-w-[1279.99px] items-start gap-6 md:gap-[34px] px-4 md:px-8 py-10 md:py-[60px] relative">
                {/* Logo */}
                <img
                    className="w-[140px] md:w-[177.29px] flex-shrink-0"
                    alt="Container"
                    src="/hacksaw-gaming-logo-0.png"
                />

                {/* Legal text block */}
                <div className="flex flex-col w-full max-w-[895.99px] items-start gap-2 md:gap-[11.99px]">
                    {legalLines.map((line) => (
                        <p
                            key={line.id}
                            className="[font-family:'Menlo-Regular',Helvetica] font-normal text-[11px] md:text-xs tracking-[0] leading-[18px] md:leading-[19.5px] w-full">
                            {line.content}
                        </p>
                    ))}
                </div>

                {/* Compliance logos row */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {/* 18+ badge */}
                    <div className="inline-flex flex-col h-8 items-center justify-center gap-2.5 p-1 bg-[#8f13f180] rounded-[40px] border border-solid border-white flex-shrink-0">
                        <div className="flex items-center justify-center w-6 h-6 [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-white text-xs text-center tracking-[0] leading-4">
                            18+
                        </div>
                    </div>

                    {/* Compliance logo images */}
                    {complianceLogos.map((logo) => (
                        <img
                            key={logo.alt}
                            className={`relative flex-shrink-0 ${logo.className}`}
                            alt={logo.alt}
                            src={logo.src}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
};
