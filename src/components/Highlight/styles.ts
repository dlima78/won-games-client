import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImageWrapper} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ alignment }) => css`
    display: grid;
    position: relative;
    height: 23rem;

    &::after {
      background-color: rgba(0, 0, 0, 0.6);
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
    }

    img {
      position: absolute;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`
export const FloatImageWrapper = styled.div`
  ${({ theme }) => css`
    align-self: end;
    grid-area: floatimage;
    max-height: 23rem;
    max-width: 100%;
    z-index: ${theme.layers.base};

    img {
      position: relative;
      object-fit: contain;
    }

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    padding: ${theme.spacings.xsmall};
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
