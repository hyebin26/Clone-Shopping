import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
