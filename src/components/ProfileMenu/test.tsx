import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /meu perfil/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /meus cartões/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /minhas compras/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /meus cartões/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
