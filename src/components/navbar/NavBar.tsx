import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import HambugerMenu from './hambugerMenu/HambugerMenu'
import NavContent from './navContent/NavContent'
import NavSearchContent from './navSearchContent/NavSearchContent'

export default function NavBar() {
  const [clickedSearchBtn, setClickedSearchBtn] = useState(false)
  const [clickedHambugerMenu, setClickedHambugerMenu] = useState(false)
  const onClickSearchBtn = () => {
    setClickedSearchBtn(true)
  }
  const onClickSearchExitBtn = () => {
    setClickedSearchBtn(false)
  }
  const onClickHambugerMenu = () => {
    setClickedHambugerMenu(!clickedHambugerMenu)
  }
  return (
    <StyledHeader>
      <StyledHeaderContainer clickedSearchBtn={clickedSearchBtn}>
        <HambugerMenu
          onClickHambugerMenu={onClickHambugerMenu}
          clickedHambugerMenu={clickedHambugerMenu}
        />
        <div>
          <StyledTitle>
            <Link href="/">
              <a>ENZOCLONE</a>
            </Link>
          </StyledTitle>
        </div>
        <NavContent
          onClickSearchBtn={onClickSearchBtn}
          clickedHambugerMenu={clickedHambugerMenu}
        />
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
        clickedHambugerMenu={clickedHambugerMenu}
      />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 1rem 3rem;
  height: 70px;
`

const StyledHeaderContainer = styled.div<{ clickedSearchBtn: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  ${({ clickedSearchBtn }) =>
    clickedSearchBtn ? 'display:none' : 'display:flex'};
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    display: flex;
  }
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
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    margin-left: 80px;
  }
  }
`
