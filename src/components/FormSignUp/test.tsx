import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignUp />)

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
    render(<FormSignUp />)

    expect(screen.getByText('Já tem uma conta?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Entrar/i })).toBeInTheDocument()
  })
})
