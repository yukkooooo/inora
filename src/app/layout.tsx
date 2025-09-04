import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'inora-book | 田中仏壇',
  description: 'inora-book商品の紹介と購入ページ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
