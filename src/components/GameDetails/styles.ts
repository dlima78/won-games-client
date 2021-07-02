import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: repeat(2, 1fr);
    color: ${theme.colors.white};
    padding: ${theme.spacings.large};
    margin-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(6, 1fr);
    `}
  `}
`

export const Block = styled.div``

export const Label = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Desription = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};
  `}
`
