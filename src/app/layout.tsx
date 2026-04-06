import type {Metadata} from 'next';
import '../../tailwind.css';

const siteUrl = 'https://hacksawgaming.uk.com';

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://hacksawgaming.uk.com/#organization',
    name: 'Hacksaw Gaming',
    url: 'https://hacksawgaming.uk.com/',
    logo: {
        '@type': 'ImageObject',
        url: 'https://hacksawgaming.uk.com/logo.png',
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@hacksawgaming.uk.com',
        },
    ],
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://hacksawgaming.uk.com/#website',
    url: 'https://hacksawgaming.uk.com/',
    name: 'Hacksaw Gaming',
    description:
        'Official website for Sweet Bonanza slot with information, features, and bonuses.',
    inLanguage: 'en',
};

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: 'Hacksaw Gaming UK – Play Slots, Free Demos & Mobile Casino Games',
    description:
        'Hacksaw Gaming slots in the UK! Play free demos, explore new releases, enjoy high RTP and innovative mechanics, and experience mobile-optimized casino games anytime.',
    openGraph: {
        title: 'Hacksaw Gaming UK – Play Slots, Free Demos & Mobile Casino Games',
        description:
            'Hacksaw Gaming slots in the UK! Play free demos, explore new releases, enjoy high RTP and innovative mechanics, and experience mobile-optimized casino games anytime.',
        url: siteUrl,
        siteName: 'Hacksaw Gaming',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hacksaw Gaming UK – Play Slots, Free Demos & Mobile Casino Games',
        description:
            'Hacksaw Gaming slots in the UK! Play free demos, explore new releases, enjoy high RTP and innovative mechanics, and experience mobile-optimized casino games anytime.',
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteSchema),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
