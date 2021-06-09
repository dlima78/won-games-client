import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should handle then open/close mobile menu', () => {
    renderWithTheme(<Menu />)
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should should show register box when logged out', () => {
    renderWithTheme(<Menu />)
    expect(screen.queryByText(/Minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/favoritos/i)).not.toBeInTheDocument()
    expect(screen.getAllByText(/entrar/i)).toHaveLength(2)
    expect(screen.getByText(/crie sua conta/i)).toBeInTheDocument()
  })

  it('should should show whishlist and acount when logged in', () => {
    renderWithTheme(<Menu username="Eduardo" />)

    expect(screen.getByText(/Minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/favoritos/i)).toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/crie sua conta/i)).not.toBeInTheDocument()
  })
})
