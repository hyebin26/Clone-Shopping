import Link from 'next/link'
import styled from 'styled-components'

type NavLinkForStyleType = {
  href: string
  content: string
}

export default function NavContent() {
  return (
    <>
      <StyledNav>
        <StyledNavContainer>
          <StyledShopNav>
            <Link href="/" passHref>
              <StyledShopLink>Shop</StyledShopLink>
            </Link>
            <HoverContainer />
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
          <StyledNavContentList>
            <NavLinkForStyle href="/" content="Search" />
          </StyledNavContentList>
          <div className="test"></div>
        </StyledNavContainer>
      </StyledNav>
    </>
  )
}

const NavLinkForStyle = ({ href, content }: NavLinkForStyleType) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{content}</StyledLink>
    </Link>
  )
}

const HoverContainer = () => {
  return (
    <StyledHoverContainer>
      <li>
        <Link href="/">
          <a>Best</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>New</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Outer</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Top</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Bottom</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Accessory</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Season Off</a>
        </Link>
      </li>
    </StyledHoverContainer>
  )
}

const ChangedBackground = styled.div`
  position: absolute;
  z-index: 0;
  background: blue;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.25s;
  pointer-events: none;
`
const StyledNavContentList = styled.li`
  &:hover {
    a {
      color: ${({ theme }) => theme.fontColor.white};
    }
  }
`

const StyledNav = styled.nav`
  flex: 0 0 50%;
`

const StyledLink = styled.a`
  z-index: 999;
  position: relative;
`

const StyledShopLink = styled(StyledLink)``

const StyledHoverContainer = styled.ul`
  display: none;
  position: absolute;
  z-index: 999;
  li {
    padding: 0.1rem 0;
    color: ${({ theme }) => theme.fontColor.white};
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledShopNav = styled(StyledNavContentList)`
  &:hover {
    ul {
      display: block;
    }
  }
`

const StyledNavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`
