import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import NavContent from './navContent/NavContent'
import NavSearchContent from './navSearchContent/NavSearchContent'

export default function NavBar() {
  const [clickedSearchBtn, isClickedSearchBtn] = useState(false)
  const onClickSearchBtn = () => {
    isClickedSearchBtn(true)
  }
  const onClickSearchExitBtn = () => {
    isClickedSearchBtn(false)
  }
  return (
    <StyledHeader>
      <StyledHeaderContainer clickedSearchBtn={clickedSearchBtn}>
        <div>
          <StyledTitle>
            <Link href="/">
              <a>ENZOCLONE</a>
            </Link>
          </StyledTitle>
        </div>
        <NavContent onClickSearchBtn={onClickSearchBtn} />
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
      </StyledHeaderContainer>
      <NavSearchContent
        onClickSearchExitBtn={onClickSearchExitBtn}
        clickedSearchBtn={clickedSearchBtn}
      />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 1rem 0;
  height: 70px;
`

const StyledHeaderContainer = styled.div<{ clickedSearchBtn: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  ${({ clickedSearchBtn }) =>
    clickedSearchBtn ? 'display:none' : 'display:flex'}
`

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
