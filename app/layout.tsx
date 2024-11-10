'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={isDark ? 'dark' : ''}>
        <div className="layout">
          <header>
            <nav>
              <Link href="/" className="logo">Hashir.</Link>
              <div className="nav-links">
                <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link>
                <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
                  {isDark ? '☀️' : '🌙'}
                </button>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2024 Hashir's Portfolio. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}