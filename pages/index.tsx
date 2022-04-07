import Head from 'next/head'
import styled from 'styled-components'
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
          content="새로운 시선으로 다양한 패션 스타일을 제공하는 Shopping"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContents />
    </>
  )
}

const StyledSection = styled.section`
  padding: 0 3rem;
`
