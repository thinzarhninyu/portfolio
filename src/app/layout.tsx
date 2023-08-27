import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Thinzar Hnin Yu/ Michelle (micxehye)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Thinzar Hnin Yu @ micxehye Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Thinzar Hnin Yu @ micxehye Portfolio" />
        <meta name="keywords" content="Thinzar Hnin Yu @ micxehye Portfolio" />
        <meta name="author" content="Thinzar Hnin Yu @ micxehye" />
      </head>
      <div className={outfit.className}>
        <div className='w-full py-3 bg-black text-white flex justify-center items-center mx-auto h-max'>
          <div className='w-10/12'>
            <Header />
            <main className='h-full py-10'>{children}</main>
            <Footer />
          </div>
        </div>
      </div>

    </html>
  )
}
