import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color={'black'} />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a black label when color is passed', () => {
    const { container } = render(<Logo id="myId" />)
    expect(container.querySelector('#paint0_linear_myId')).toBeInTheDocument()
  })

  it('should render a normal Logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger Logo', () => {
    render(<Logo size={'large'} />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger Logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
