import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import GameItem, { GameItemProps } from '.'

const props: GameItemProps = {
  id: '1',
  img: 'image.jpg',
  title: 'Any title',
  price: 'R$ 155,00'
}

describe('<GameItem />', () => {
  it('should render the iten', () => {
    render(<GameItem {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render remove if item is inside the cart call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<GameItem {...props} />, { cartProviderProps })

    const removeLink = screen.getByText(/remove/i)
    expect(removeLink).toBeInTheDocument()

    userEvent.click(removeLink)
    expect(cartProviderProps.removeFromCart).toHaveBeenLastCalledWith('1')
  })

  it('should render the item with dowload link', () => {
    const downloadLink = 'https://link'
    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })

  it('should render free game when theres no paymentInfo', () => {
    const paymentInfo = {
      flag: null,
      img: null,
      number: 'Free Game',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByText(/free game/i)).toBeInTheDocument()
  })
})
