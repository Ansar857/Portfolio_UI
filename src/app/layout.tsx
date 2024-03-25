"use client"
import Header from './Components/widgets/Header';
import './globals.css';
import { useEffect } from 'react';
import { initHotjar } from './Components/Hotjar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initHotjar();

    // Add Leadfeeder script within useEffect (optional for potential async execution)
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://sc.lfeeder.com/lftracker_v1_bElvO730vrb4ZMqj.js'; // Assuming your site ID is 'bElvO730vrb4ZMqj'
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Other head elements, if any */}
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
