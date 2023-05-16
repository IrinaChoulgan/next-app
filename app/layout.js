'use client';

import './globals.css';
// import { useState } from 'react';
import ProjectContext from '@/components/Context';
// import Context from '@/components/Context';

export default function RootLayout({ children }) {
  // const [nameContext, setNameContext] = useState('default');

  return (
    <ProjectContext>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Manrope:wght@500&family=Noto+Sans:wght@300;500;800&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700;900&family=Space+Grotesk:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>{children}</body>
      </html>
    </ProjectContext>
  );
}
