import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Empty from '.'

const props = {
  title: 'simple title',
  description: 'Simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', { name: /a gamer a couch playing videogame/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /simple title/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Simple description')).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Voltar para a loja/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render the button when haslink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /Voltar para a loja/i })
    ).not.toBeInTheDocument()
  })
})