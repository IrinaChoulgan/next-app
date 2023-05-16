'use client';

import './globals.css';
import ProjectContext from '@/components/Context';

export default function RootLayout({ children }) {
  return (
    <ProjectContext>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body>{children}</body>
      </html>
    </ProjectContext>
  );
}
