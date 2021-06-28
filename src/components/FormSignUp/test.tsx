import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirmar senha')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /criar conta/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render Sign Up link', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByText('Já tem uma conta?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Entrar/i })).toBeInTheDocument()
  })
})
