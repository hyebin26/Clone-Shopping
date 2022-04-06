import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import NavHoverContent from '../navHoverContent/NavHoverContent'

type NavLinkForStyleProps = {
  href: string
  content: string
}

type NavContentProps = {
  onClickSearchBtn: () => void
}

export default function NavContent({ onClickSearchBtn }: NavContentProps) {
  const clickSearchBtn = () => {
    onClickSearchBtn()
  }

  return (
    <StyledNav>
      <StyledNavContainer>
        <StyledShopNav>
          <NavLinkForStyle href="/" content="Store" />
          <NavHoverContent />
        </StyledShopNav>
        <StyledNavContentList>
          <NavLinkForStyle href="/" content="About" />
        </StyledNavContentList>
        <StyledNavContentList>
          <NavLinkForStyle href="/" content="Collection" />
        </StyledNavContentList>
        <StyledNavContentList>
          <NavLinkForStyle href="/" content="Contact" />
        </StyledNavContentList>
        <StyledNavContentList>
          <NavLinkForStyle href="/" content="Notice" />
        </StyledNavContentList>
        <StyledNavContentList>
          <NavLinkForStyle href="/" content="Q&A" />
        </StyledNavContentList>
        <StyledNavContentList>
          <NavLinkForStyle href="/" content="Stockist" />
        </StyledNavContentList>
        <StyledSearchBtn onClick={clickSearchBtn}>Search</StyledSearchBtn>
      </StyledNavContainer>
    </StyledNav>
  )
}

const NavLinkForStyle = ({ href, content }: NavLinkForStyleProps) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{content}</StyledLink>
    </Link>
  )
}

const StyledNavContentList = styled.li``

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
`

const StyledNav = styled.nav`
  flex: 0 0 50%;
`

const StyledLink = styled.a`
  z-index: 999;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.fontColor.blue};
  }
`

const StyledShopNav = styled(StyledNavContentList)`
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
`

const StyledNavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`
