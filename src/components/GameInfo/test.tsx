import { render, screen } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = render(<GameInfo {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(/\$210.00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render game with buttons', () => {
    render(<GameInfo {...props} />)
    expect(
      screen.getByRole('button', { name: /adicionar/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /lista de desejos/i })
    ).toBeInTheDocument()
  })
})
