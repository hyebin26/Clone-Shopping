import React from 'react'
import Footer from '../footer/Footer'
import Logo from '../logo/Logo'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
      <Logo />
      <Footer />
    </>
  )
}
