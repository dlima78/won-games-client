import styled, { css } from 'styled-components'

export const Card = styled.label`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    border-radius: 0.2rem;
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
