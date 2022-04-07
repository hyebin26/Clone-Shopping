import React from 'react'
import Footer from '../footer/Footer'
import Logo from '../logo/Logo'
import NavBar from '../navbar/NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <>{children}</>
      <Logo />
      <Footer />
    </>
  )
}
