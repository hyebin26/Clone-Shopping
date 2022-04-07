import Image from 'next/image'
import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Logo() {
  return (
    <StyledLogoContainer>
      <StyledLogoBox>
        <Image width="50px" height="50px" src="/assets/icon.png" />
      </StyledLogoBox>
    </StyledLogoContainer>
  )
}

const test = keyframes`
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(360deg)
    }
`

const StyledLogoBox = styled.div`
  position: fixed;
  left: 30px;
  bottom: 30px;
  animation: ${test} 5s infinite linear;
  pointer-events: none;
`

const StyledLogoContainer = styled.section``
