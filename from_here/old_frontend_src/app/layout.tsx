import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import AuthenticatedWishlistProvider from '@/components/providers/AuthenticatedWishlistProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fambri Farms - Restaurant Supply',
  description: 'B2B restaurant supply ordering system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuthenticatedWishlistProvider>
            {children}
          </AuthenticatedWishlistProvider>
        </AuthProvider>
      </body>
    </html>
  )
} 