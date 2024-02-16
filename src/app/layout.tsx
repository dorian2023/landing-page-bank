import './globals.css'
import type { Metadata } from 'next'
import { Arima } from 'next/font/google'

const popinsFont = Arima({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muebles Bellagio 🛋️ ',
  description: 'Tu muebleria de confianza.!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}
