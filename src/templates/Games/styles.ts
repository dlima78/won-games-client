import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 2fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
