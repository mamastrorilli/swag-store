'use client'

import { useEffect, useState } from 'react'

// Same level of Header, not a wrapper to keep the component tree consistent
export default function HeaderScrollBackground() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={`absolute inset-0 z-0 bg-white/70 transition-[backdrop-filter,box-shadow] duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.10)]' : ''
      }`}
      aria-hidden
    />
  )
}
