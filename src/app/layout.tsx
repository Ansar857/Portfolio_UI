'use client'
import Head from 'next/head';
import Header from './Components/widgets/Header';
import { useEffect } from 'react';
import { initHotjar } from './Components/Hotjar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initHotjar();
    // Initialize Leadfeeder
    const leadfeederScript = document.createElement('script');
    leadfeederScript.innerHTML = `
      (function(ss,ex){
        window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};
        (function(d,s){
          fs=d.getElementsByTagName(s)[0];
          function ce(src){
            var cs=d.createElement(s);
            cs.src=src;
            cs.async=1;
            fs.parentNode.insertBefore(cs,fs);
          };
          ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
        })(document,'script');
      })('bElvO730vrb4ZMqj');
    `;
    document.head.appendChild(leadfeederScript);

    return () => {
      // Cleanup
      document.head.removeChild(leadfeederScript);
    };
  }, []);

  return (
    <div>
      <Head>
        {/* Add any other head elements here */}
      </Head>
      <Header />
      {children}
    </div>
  );
}
