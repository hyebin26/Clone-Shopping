import React, { useState } from 'react'
import styled from 'styled-components'

type HambugerMenuProps = {
  onClickHambugerMenu: () => void
  clickedHambugerMenu: boolean
}

export default function HambugerMenu({
  onClickHambugerMenu,
  clickedHambugerMenu,
}: HambugerMenuProps) {
  return (
    <StyledHambugerContainer onClick={onClickHambugerMenu}>
      <StyledHambugerFirst
        clickedHambugerMenu={clickedHambugerMenu}
      ></StyledHambugerFirst>
      <StyledHambugerSecond
        clickedHambugerMenu={clickedHambugerMenu}
      ></StyledHambugerSecond>
    </StyledHambugerContainer>
  )
}

const StyledHambugerContainer = styled.div`
  display: none;
  position: relative;
  z-index: 999;
  width: 30px;
  height: 10px;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    display: block;
  }
`
const StyledHambugerFirst = styled.span<{ clickedHambugerMenu: boolean }>`
  transition: 0.2s ease-out;
  width: 20px;
  height: 1px;
  position: absolute;
  border-top: 1px solid black;
  top: ${({ clickedHambugerMenu }) => (clickedHambugerMenu ? '5px;' : '0px;')});
  transform: ${({ clickedHambugerMenu }) =>
    clickedHambugerMenu ? 'rotate(45deg);' : 'rotate(0deg)'})
`

const StyledHambugerSecond = styled(StyledHambugerFirst)`
top: ${({ clickedHambugerMenu }) => (clickedHambugerMenu ? '5px;' : '10px;')});
  transform: ${({ clickedHambugerMenu }) =>
    clickedHambugerMenu ? 'rotate(-45deg);' : 'rotate(0deg);'});
`
