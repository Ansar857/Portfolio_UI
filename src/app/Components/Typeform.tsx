// "use client"
// import { useEffect } from 'react';
// import { createPopup } from '@typeform/embed';
// import '@typeform/embed/build/css/popup.css';

// export const Typeform = () => {
//   useEffect(() => {
//     const { toggle } = createPopup("c1wFp7RT");
//     const button = document.getElementById('typeform-popup-button-3');
//     if (button) {
//       button.onclick = toggle;
//     }
//   }, []);

//   return (
//     <button id='typeform-popup-button-3'>
//         Click me
//     </button>
//  );
// };

import { useEffect } from 'react';
import { createPopup, PopupOptions } from '@typeform/embed';
import '@typeform/embed/build/css/popup.css';



export const Typeform: React.FC = () => {
  useEffect(() => {
   
    const options: PopupOptions = {
      source: "website_fixed_header_fomo"
    };
    const { toggle } = createPopup("c1wFp7RT", options);
    const button = document.getElementById('typeform-popup-button-3');
    if (button) {
      button.onclick = toggle;
    }
  }, []);

  return (
    <button id='typeform-popup-button-3'>
        Click me
    </button>
 );
}
