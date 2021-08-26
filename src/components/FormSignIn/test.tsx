import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render ForgotPassword link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Forgot your password?/i })
    ).toBeInTheDocument()
  })

  it('should render Sign Up link', () => {
    render(<FormSignIn />)

    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
  })
})
