import Head from 'next/head'
import HomeContents from '../src/components/homeContents/HomeContents'
import NavBar from '../src/components/navbar/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Shopping | 새로운 시선으로 다양한 패션 스타일을 제공하는 Shopping
        </title>
        <meta
          name="description"
          content="엔조블루의 모든 상품을 쇼핑할 수 있습니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HomeContents />
    </>
  )
}
