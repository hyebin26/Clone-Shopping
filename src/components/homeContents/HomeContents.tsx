import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import MainData from '../../data/main'

type MainDataType = {
  img: {
    id: number
    title: string
    src: string
  }
}

export default function HomeContents() {
  return (
    <StyledMain>
      <StyledContents>
        {MainData.map((img) => (
          <HomeContentList img={img} key={img.id} />
        ))}
      </StyledContents>
    </StyledMain>
  )
}

const HomeContentList = ({ img }: MainDataType) => {
  const { src, title } = img
  return (
    <StyledImageContainer>
      <Image
        alt={title}
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </StyledImageContainer>
  )
}

const StyledContents = styled.ul`
  scroll-snap-type: y mandatory;
  position: relative;
  height: 100vh;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledMain = styled.main``

const StyledImageContainer = styled.li`
  height: 100vh;
  position: relative;
  z-index: -1;
  margin-bottom: 1rem;
  scroll-snap-align: start;
`
