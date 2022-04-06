import React from 'react'
import styled from 'styled-components'

type NavSearchContentProps = {
  onClickSearchExitBtn: () => void
  clickedSearchBtn: boolean
}

export default function NavSearchContent({
  onClickSearchExitBtn,
  clickedSearchBtn,
}: NavSearchContentProps) {
  const onSubmitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <StyledSearchSection clickedSearchBtn={clickedSearchBtn}>
      <StyledSearchDivForBackground
        onClick={onClickSearchExitBtn}
      ></StyledSearchDivForBackground>
      <StyledSearchContainer>
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
  transition: 0.4s;
`

const StyledSearchBtn = styled.button`
  outline: none;
  background: inherit;
  border: 1px solid ${({ theme }) => theme.fontColor.grey};
  padding: 0.3rem;
  cursor: pointer;
`
const StyledExitBtn = styled.button`
  outline: none;
  background: inherit;
  border: 1px solid ${({ theme }) => theme.fontColor.grey};
  border-left: none;
  padding: 0.3rem;
  cursor: pointer;
`

const StyledSearchInput = styled.input`
  width: 40%;
  padding: 0.3rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.fontColor.grey};
  border-right: none;
  border-left: none;
`

const StyledSearchDivForBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: black;
  top: 0;
  left: 0;
  opacity: 0.5;
`

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const StyledSearchContainer = styled.div`
  background: white;
  width: 100%;
  height: 80px;
  left: 0;
  top: 0;
  position: absolute;
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.75);
`
