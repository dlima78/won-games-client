import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="João" />)

    expect(screen.getByText(/joão/i)).toBeInTheDocument()
  })
  it('should render the menu', () => {
    render(<UserDropdown username="João" />)

    userEvent.click(screen.getByText(/joão/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
