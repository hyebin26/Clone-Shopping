import Head from 'next/head'
import React from 'react'
import NavBar from '../../src/components/navbar/NavBar'
import Products from '../../src/components/products/Products'

export default function index() {
  return (
    <>
      <Head>
        <title>
          Store | 새로운 시선으로 다양한 패션 스타일을 제공하는 Shopping
        </title>
        <meta name="description" content="" />
      </Head>
      <NavBar />
      <Products />
    </>
  )
}
