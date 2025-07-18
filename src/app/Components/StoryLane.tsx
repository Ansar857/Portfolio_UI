// // pages/index.js
// import { useState } from 'react'

import { useState } from "react";

// export default function Home() {
//   const [open, setOpen] = useState(false)

//   // 🚀 Hard-coded for now – swap these out later for dynamic values!
//   const firstName = 'Ansar'
//   const lastName  = 'Ilyas'
//   const demoId    = 'shz7f4jfthfn'

//   // Build your personalized Storylane URL
//   const demoUrl = `https://app.storylane.io/share/${demoId}?` +
//     new URLSearchParams({
//       'token[first_name]': firstName,
//       'token[last_name]':  lastName
//     }).toString()

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Welcome, {firstName}!</h1>
//       <p>Click below to load your personalized Storylane demo.</p>

//       <button
//         onClick={() => setOpen(true)}
//         style={{
//           padding: '0.6em 1.2em',
//           fontSize: '1rem',
//           borderRadius: '4px',
//           border: 'none',
//           background: '#6366F1',
//           color: '#fff',
//           cursor: 'pointer'
//         }}
//       >
//         View Demo
//       </button>

//       {open && (
//         <div
//           style={{
//             marginTop: '1.5rem',
//             position: 'relative',
//             width: '100%',
//             paddingBottom: '56.25%' /* 16:9 aspect ratio */
//           }}
//         >
//           <iframe
//             src={demoUrl}
//             style={{
//               position: 'absolute',
//               top: 0, left: 0,
//               width: '100%',
//               height: '100%',
//               border: '0',
//               borderRadius: '4px'
//             }}
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       )}
//     </div>
//   )
// }
// import { useState } from 'react'

// export default function Home() {
//   const [open, setOpen] = useState(false)

//   // 🚀 Swap in your real values
//   const firstName = 'Yasir'
//   const lastName  = 'Haventures'
//   const hubId     = 'zwbzxkyaaobo'  // ← your Hub ID

//   // Build the Hub URL, embedding + personalizing in one go
//   const hubParams = new URLSearchParams({
//     embed:                 'true',          
//     'token[first_name]':   firstName,
//     'token[company_nane]':    lastName
//   })

//   const hubUrl = `https://app.storylane.io/hub/${hubId}?${hubParams.toString()}`

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Welcome, {firstName}!</h1>
//       <p>Click below to load your personalized Demo Hub.</p>

//       <button
//         onClick={() => setOpen(true)}
//         style={{
//           padding: '0.6em 1.2em',
//           fontSize: '1rem',
//           borderRadius: '4px',
//           border: 'none',
//           background: '#6366F1',
//           color: '#fff',
//           cursor: 'pointer'
//         }}
//       >
//         View Demo Hub
//       </button>

//       {open && (
//         <div
//           style={{
//             marginTop: '1.5rem',
//             position: 'relative',
//             width: '100%',
//             paddingBottom: '56.25%' /* 16:9 */
//           }}
//         >
//           <iframe
//             src={hubUrl}
//             style={{
//               position: 'absolute',
//               top: 0, left: 0,
//               width: '100%', height: '100%',
//               border: 0, borderRadius: '4px'
//             }}
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       )}
//     </div>
//   )
// }
  import {  useEffect } from 'react'

  export default function Home() {
    const [open, setOpen] = useState(true)


    const firstName = 'Ansar'
    const lastName  = 'Haventures'
    const hubId     = 'zwbzxkyaaobo'

    const hubParams = new URLSearchParams({
      embed: 'true',
      'token[first_name]':    firstName,
      'token[company_name]':   lastName,
    })

    const hubUrl = `https://app.storylane.io/hub/${hubId}?${hubParams}`

    // on mount, kill the parent-page scrollbars
    useEffect(() => {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      return () => {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
    }, [])

    return (
      <>
        {open && (
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              overflow: 'hidden',              // make sure no scrollbars ever appear
              overscrollBehavior: 'contain',   // trap any touch/trackpad scrolls
            }}
          >
            <iframe
              src={hubUrl}
              scrolling="no"                   // disable old‐school scrollbars
              style={{
                width:  '100%',
                height: '100%',
                border: 'none',
                overflow: 'hidden',
                overscrollBehavior: 'contain', // also trap inside the iframe
              }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </>
    )
  }
