import React from 'react'
import styled from 'styled-components'

type NavSearchContentProps = {
  onClickSearchExitBtn: () => void
  clickedSearchBtn: boolean
  clickedHambugerMenu: boolean
}

export default function NavSearchContent({
  onClickSearchExitBtn,
  clickedSearchBtn,
  clickedHambugerMenu,
}: NavSearchContentProps) {
  const onSubmitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <StyledSearchSection clickedSearchBtn={clickedSearchBtn}>
      <StyledSearchDivForBackground
        onClick={onClickSearchExitBtn}
      ></StyledSearchDivForBackground>
      <StyledSearchContainer clickedHambugerMenu={clickedHambugerMenu}>
        <StyledSearchForm onSubmit={onSubmitSearchForm}>
          <StyledSearchBtn>검색</StyledSearchBtn>
          <StyledSearchInput type="text" placeholder="스토어 검색" />
          <StyledExitBtn onClick={onClickSearchExitBtn}>X</StyledExitBtn>
        </StyledSearchForm>
      </StyledSearchContainer>
    </StyledSearchSection>
  )
}

const StyledSearchSection = styled.section<{ clickedSearchBtn: boolean }>`
  opacity: ${({ clickedSearchBtn }) => (clickedSearchBtn ? '1' : '0')};
  pointer-events: ${({ clickedSearchBtn }) =>
    clickedSearchBtn ? 'auto' : 'none'};
  transition: 0.4s;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    opacity: 1;
  }
`

const StyledSearchBtn = styled.button`
  outline: none;
  background: white;
  border: 1px solid ${({ theme }) => theme.fontColor.grey};
  padding: 0.4rem 0.3rem;
  cursor: pointer;
  border-radius: 3px 0 0 3px;
`
const StyledExitBtn = styled.button`
  outline: none;
  background: inherit;
  border: 1px solid ${({ theme }) => theme.fontColor.grey};
  border-left: none;
  padding: 0.4rem 0.3rem;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    display: none;
  }
`

const StyledSearchInput = styled.input`
  width: 40%;
  padding: 0.4rem 0.3rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.fontColor.grey};
  border-right: none;
  border-left: none;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    border-right: 1px solid ${({ theme }) => theme.fontColor.grey};
    border-radius: 0 3px 3px 0;
    pointer-events: auto;
  }
`

const StyledSearchDivForBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: black;
  top: 0;
  left: 0;
  opacity: 0.5;
  padding: 0.3rem;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    display: none;
  }
`

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 999;
  pointer-events: auto;
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    justify-content: flex-start;
    padding-left: 46px;
  }
`
const StyledSearchContainer = styled.div<{ clickedHambugerMenu: boolean }>`
  background: white;
  width: 100%;
  height: 80px;
  left: 0;
  top: 0;
  position: absolute;
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: ${({ theme }) => theme.mediaQuery.large}) {
    display: ${({ clickedHambugerMenu }) =>
      clickedHambugerMenu ? 'block;' : 'none;'};
    background: inherit;
    box-shadow: none;
    top: 50px;
    z-index: 999;
  }
`
