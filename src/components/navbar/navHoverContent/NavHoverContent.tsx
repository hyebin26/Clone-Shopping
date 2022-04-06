import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default function NavHoverContent() {
  return (
    <>
      <StyledHoverForBackground></StyledHoverForBackground>
      <StyledHoverBox>
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
      </StyledHoverBox>
      <StyledHoverForModal></StyledHoverForModal>
    </>
  )
}

const StyledHoverForBackground = styled.section`
  opacity: 0.5;
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: black;
  pointer-events: none;
  transition: 3s;
`

const StyledHoverForModal = styled.div`
  position: fixed;
  opacity: 0;
  background: white;
  transition: 0.3s;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.75);
  height: 35vh;
`

const StyledHoverBox = styled.ul`
  z-index: 999;
  opacity: 0;
  position: absolute;
  top: 25px;
  transition: 0.5s;
  pointer-events: none;
  width: 100px;
  a {
    color: ${({ theme }) => theme.fontColor.black};
  }
  li {
    padding: 0.1rem 0;
  }
  a {
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.fontColor.blue};
    }
  }
`
