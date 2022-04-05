import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import NavContent from './navContent/NavContent'

export default function NavBar() {
  return (
    <StyledHeader>
      <div>
        <StyledTitle>
          <Link href="/">
            <a>ENZOCLONE</a>
          </Link>
        </StyledTitle>
      </div>
      <NavContent />
      <StyledUserContainer>
        <li>
          <Link href="/">
            <a>LOGIN/</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>CART/</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ACCOUNT</a>
          </Link>
        </li>
      </StyledUserContainer>
    </StyledHeader>
  )
}

const StyledUserContainer = styled.ul`
  flex: 0 0 13%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
`

const StyledTitle = styled.h1`
  font-size: 1.7rem;
  position: relative;
  z-index: 999;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  z-index: 999;
`
