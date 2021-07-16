import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 32rem 2fr;
      gap: calc(${theme.grid.gutter} * 2);
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`
