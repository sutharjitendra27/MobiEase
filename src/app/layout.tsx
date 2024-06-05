'use client'

import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import 'simplebar-react/dist/simplebar.min.css'
import 'flatpickr/dist/themes/light.css'
import 'react-svg-map/lib/index.css'
import 'leaflet/dist/leaflet.css'
// scss imprt
import '@/scss/app.scss'
// redux imports
import { Provider } from 'react-redux'
import store from '@/store'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "MobiEase",
//   description:
//     "MobiEase: Your trusted partner for mobile service management and accessories, offering seamless solutions to keep your devices running smoothly and stylishly.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`custom-tippy mobiease-app font-inter`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
