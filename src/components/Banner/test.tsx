import { render, screen } from 'utils/test-utils'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Death death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy Now',
  buttonLink: '/games/death-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Death death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Death death/i })
    ).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    render(
      <Banner
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: 'background: #3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
