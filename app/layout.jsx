import './globals.css';

export const metadata = {
  title: 'Universe Shotokan Karate Organisation (USKO) India | Official Academy',
  description:
    'Universe Shotokan Karate Organisation (USKO) India. Premier martial arts institution for authentic Shotokan Karate, Pro Kickboxing, and Tactical Self-Defence. 3,000+ championship medals, 40+ national trophies.',
  keywords: [
    'Shotokan Karate',
    'USKO India',
    'Karate Academy',
    'Kickboxing India',
    'Self Defence',
    'Black Belt Syllabus',
    'Kumite',
    'Kata',
  ],
  authors: [{ name: 'USKO India' }],
  metadataBase: new URL('https://uskoindia.com'),
  openGraph: {
    title: 'USKO India · Universe Shotokan Karate Organisation',
    description:
      'Forging champions through authentic Shotokan Karate & Pro Kickboxing. 3,000+ championship medals, 40+ national trophies.',
    url: 'https://uskoindia.com',
    siteName: 'USKO India',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'USKO India Dojo and Athletes',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USKO India · Universe Shotokan Karate Organisation',
    description:
      'Forging champions through authentic Shotokan Karate & Pro Kickboxing. 3,000+ championship medals.',
    images: ['/hero-bg.jpg'],
  },
};

export const viewport = {
  themeColor: '#0c0b0a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Noto+Serif+JP:wght@400;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="luxury-theme">
        {/* Physical Film Grain Texture Overlay */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
