import Link from 'next/link'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import NavHoverContent from '../navHoverContent/NavHoverContent'

type NavLinkForStyleProps = {
  href: string
  content: string
}

type NavContentProps = {
  onClickSearchBtn: () => void
  clickedHambugerMenu: boolean
  onClickHambugerMenu: () => void
}

export default function NavContent({
  onClickSearchBtn,
  clickedHambugerMenu,
  onClickHambugerMenu,
}: NavContentProps) {
  return (
    <StyledNav clickedHambugerMenu={clickedHambugerMenu}>
      <StyledChangeBackground
        clickedHambugerMenu={clickedHambugerMenu}
        onClick={onClickHambugerMenu}
      ></StyledChangeBackground>
      <StyledNavContainer clickedHambugerMenu={clickedHambugerMenu}>
        <StyledShopNav>
          <NavLinkForStyle href="/products" content="Store" />
          <NavHoverContent />
        </StyledShopNav>
        <li>
          <NavLinkForStyle href="/" content="About" />
        </li>
        <li>
          <NavLinkForStyle href="/" content="Collection" />
        </li>
        <li>
          <NavLinkForStyle href="/" content="Contact" />
        </li>
        <li>
          <NavLinkForStyle href="/" content="Notice" />
        </li>
        <li>
          <NavLinkForStyle href="/" content="Q&A" />
        </li>
        <li>
          <NavLinkForStyle href="/" content="Stockist" />
        </li>
        <StyledSearchBtn onClick={onClickSearchBtn}>Search</StyledSearchBtn>
      </StyledNavContainer>
    </StyledNav>
  )
}
// 클릭했을 때 => clickedHambuger가 트루라면 false로 변경하기?
const NavLinkForStyle = ({ href, content }: NavLinkForStyleProps) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{content}</StyledLink>
    </Link>
  )
}

const visible = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledChangeBackground = styled.div<{ clickedHambugerMenu: boolean }>`
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    position: absolute;
    animation: ${visible} 0.3s;
    background: ${({ theme }) => theme.fontColor.blue};
    top: 0;
    width: 100vw;
    height: 100vh;
  }
`

const StyledSearchBtn = styled.button`
  border: none;
  outline: none;
  background: inherit;
  font-size: 1rem;
  z-index: 999;
  color: ${({ theme }) => theme.fontColor.black};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.fontColor.blue};
  }
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    display: none;
  }
`

const StyledNav = styled.nav<{ clickedHambugerMenu: boolean }>`
  flex: 0 0 50%;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    position: absolute;
    display: ${({ clickedHambugerMenu }) =>
      clickedHambugerMenu ? 'block' : 'none'};
    left: 0;
    top: 0;
  }
`

const StyledLink = styled.a`
  z-index: 999;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.fontColor.blue};
  }
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    &:hover {
      color: ${({ theme }) => theme.fontColor.black};
    }
  }
`

const StyledShopNav = styled.li`
  position: relative;
  &:hover {
    section {
      display: block;
    }
    ul {
      opacity: 1;
      pointer-events: auto;
    }
    div {
      opacity: 1;
      pointer-events: auto;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    &:hover {
      section {
        display: none;
      }
      ul {
        opacity: 0;
        pointer-events: none;
      }
      div {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
`

const StyledNavContainer = styled.ul<{ clickedHambugerMenu: boolean }>`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    display: ${({ clickedHambugerMenu }) =>
      clickedHambugerMenu ? 'block' : 'none'};
    top: 120px;
    left: 50px;
    position: absolute;
    li {
      color: white;
      padding: 0.5rem 0;
    }
    button {
      padding: 0.5rem 0;
      color: white;
    }
  }
`
