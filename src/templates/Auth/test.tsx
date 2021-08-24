import { render, screen } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.queryAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /A WON é a melhor e mais completa plataforma de games./i
      })
    )
    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(
      screen.getByText(/Won Games 2021 © Todos os Direitos Reservados/i)
    ).toBeInTheDocument()
  })
})
