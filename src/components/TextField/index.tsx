import React, { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  error?: string
  label?: string
  labelFor?: string
  icon?: React.ReactNode
  initialValue?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
} & InputHTMLAttributes<HTMLElement>

const TextField = ({
  error,
  label,
  labelFor = '',
  initialValue = '',
  icon,
  onInput,
  iconPosition = 'left',
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      <S.Label htmlFor={labelFor}>{label}</S.Label>
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          id={labelFor}
          value={value}
          onChange={onChange}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default TextField
