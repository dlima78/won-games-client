import { screen, waitFor } from '@testing-library/react'
import { Email } from '@styled-icons/material-outlined/Email'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helper'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" />)
    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="digite seu email" />)
    expect(screen.getByPlaceholderText(/digite seu email/i)).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField placeholder="digite seu email" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'this is a text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue('this is a text')
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
  })

  it('Does not change its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        placeholder="digite seu email"
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const text = 'this is another text'

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Accessible by tab', () => {
    renderWithTheme(
      <TextField
        placeholder="digite seu email"
        label="TextField"
        labelFor="TextField"
      />
    )

    const input = screen.getByLabelText('TextField')
    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
