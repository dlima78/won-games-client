import { render, screen } from 'utils/test-utils'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Diferent Tales',
  platforms: ['linux', 'mac', 'windows'],
  publisher: 'Walktrough',
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Desenvolvedor/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Data de lançamento/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Plataformas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Editora/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Classificação/i })
    ).toBeInTheDocument()
  })

  it('shoulder render platform icons', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('21 de nov. de 2020')).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render 16+ rating when BR16', () => {
    render(<GameDetails {...props} rating="BR16" />)

    expect(screen.getByText(/16\+/i)).toBeInTheDocument()
  })

  it('should render 16+ rating when BR16', () => {
    render(<GameDetails {...props} rating="BR16" />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
