import { render, screen } from 'utils/test-utils'

import Empty from '.'

const props = {
  title: 'simple title',
  description: 'Simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /simple title/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Simple description')).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Go back to store/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render the button when haslink is not passed', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /Go back to store/i })
    ).not.toBeInTheDocument()
  })
})
