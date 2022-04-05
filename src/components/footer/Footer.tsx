import React from 'react'
import styled from 'styled-components'
import FooterPolicy from './footerPolicy/FooterPolicy'
import FooterStore from './footerStore/FooterStore'
import FooterInfo from './footerInfo/FooterInfo'
import FooterCompany from './footerCompany/FooterCompany'

export default function Footer() {
  return (
    <StyledFooter>
      <FooterPolicy />
      <FooterStore />
      <FooterInfo />
      <FooterCompany />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.fontColor.grey};
`
