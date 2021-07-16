import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the ProfileForm', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /Meu Perfil/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/digite sua senha/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/nova senha/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument()
  })
})
