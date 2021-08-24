import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render ForgotPassword link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Esqueceu a senha?/i })
    ).toBeInTheDocument()
  })

  it('should render Sign Up link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Cadastre-se/i })
    ).toBeInTheDocument()
  })
})
