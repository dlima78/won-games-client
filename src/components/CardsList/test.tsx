import { render, screen } from 'utils/test-utils'

import cardsMock from 'components/PaymentOptions/mock'
import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    render(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /meus cartões/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/cards/visa.png'
    )

    expect(screen.getByText(/1324/i)).toBeInTheDocument()
    expect(screen.getByText(/7896/i)).toBeInTheDocument()
  })
})
