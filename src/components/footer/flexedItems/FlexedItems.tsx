import React, { ReactNode } from 'react'
import styled from 'styled-components'

type FlexedItemsType = {
  children: ReactNode
  category: string
}

export default function FlexedItems({ children, category }: FlexedItemsType) {
  return (
    <StyledUl>
      <StyledItemCategory>{category}</StyledItemCategory>
      {children}
    </StyledUl>
  )
}

const StyledItemCategory = styled.li`
  color: ${({ theme }) => theme.fontColor.black};
  font-size: 1rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.mediaQuery.medium}) {
    font-size: 0.8rem;
  }
`

const StyledUl = styled.ul`
  flex: 0 0 22%;
  a:hover {
    text-decoration: underline;
  }
  li {
    padding: 0.1rem 0;
  }
`
