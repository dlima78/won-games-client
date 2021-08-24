import { render, screen, fireEvent } from 'utils/test-utils'

import GameCard from '.'

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'popularionzero.jpg',
  price: 215
}

describe('<GameCard />', () => {
  it('should render GameCard correctly', () => {
    const { container } = render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)
    const price = screen.getByText('$215.00')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice={200} />)
    expect(screen.getByText('$200.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('$215.00')).toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favourite icon when favourite is true', () => {
    render(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when fovorite is clicked', () => {
    const onFav = jest.fn()
    render(<GameCard {...props} favorite onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    const onFav = jest.fn()
    render(
      <GameCard
        {...props}
        favorite
        onFav={onFav}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: 'background: #F231A5' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
