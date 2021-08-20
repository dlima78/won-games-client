import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={handleDropdown}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay onClick={handleDropdown} aria-hidden={!isOpen} />
    </S.Wrapper>
  )
}

export default Dropdown
