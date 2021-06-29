import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'
import { darken } from 'polished'

export const FormWrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall};
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`
export const FormLink = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};

    & a {
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
      text-decoration: none;
      margin-left: 0.4rem;
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`