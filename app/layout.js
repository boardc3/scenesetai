import './globals.css'

export const metadata = {
  title: 'Scene Set AI',
  description: 'Professional AI-powered scene setting and production services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-luxury-black text-white">
        {children}
      </body>
    </html>
  )
}
