import { ReactNode } from 'react';

import { LayoutProvider } from './layout-provider';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { fonts } from '@/config';

import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const { archivo, inter } = fonts;

  return (
    <html lang="en-US" className={`${archivo.variable} ${inter.variable}`}>
      <head>
        <title>Never throw away a thought | NoteX</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="application-name" content="NoteX" />
        <meta name="apple-mobile-web-app-title" content="NoteX" />

        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />

        <meta name="description" content="Never throw away a thought | NoteX" />

        <meta name="author" content="gelzin.com" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandex" content="index, follow" />

        <meta name="apple-mobile-web-app-title" content="NoteX" />
        <meta name="application-name" content="NoteX" />

        <meta name="theme-color" content="#ffffff" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/favicon-light.png"
        />

        <meta property="og:site_name" content="NoteX" />
        <meta
          property="og:title"
          content="Never throw away a thought | NoteX"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notex.live" />
        <meta
          property="og:description"
          content="Never throw away a thought | NoteX"
        />

        <meta property="og:image" content="/og/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NoteX" />

        <meta property="og:locale" content="en_US" />

        <link rel="icon" href="/favicons/favicon-light.png" type="image/png" />
      </head>

      <body className={`${archivo.className}`}>
        <main className="flex flex-col items-start justify-start min-h-screen h-auto min-w-screen bg-zinc-50 text-zinc-950 overflow-hidden">
          <LayoutProvider>{children}</LayoutProvider>
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
