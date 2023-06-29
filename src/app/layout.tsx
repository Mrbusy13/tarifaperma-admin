import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tarifa Permaculture',
  description: 'Micro Greens in Andalucia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-green-500 h-screen">
          <header className="bg-green-200 h-[10%] flex items-center">
            <div className="text-white text-5xl pl-4">LOGO</div>
          </header>
          {children}</main>
        </body>
    </html>
  )
}
