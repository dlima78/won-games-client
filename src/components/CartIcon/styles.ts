import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
  `}
`
export const Badge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    background: ${theme.colors.secondary};
    border-radius: 50%;
    color: ${theme.colors.white};
    position: absolute;
    right: -0.4rem;
    top: -0.4rem;
    width: 1.6rem;
    height: 1.6rem;
  `}
`
