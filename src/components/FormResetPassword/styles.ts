import styled, { css } from 'styled-components'

import { lighten } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-align: right;
    text-decoration: none;

    &:hover {
      color: ${lighten(0.5, theme.colors.black)};
    }
  `}
`
