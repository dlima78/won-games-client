import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  newGamesTitle: 'New Games',
  mostPopularHighlight: highlightMock,
  mostPopularGamesTitle: 'Popular Games',
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingGamesTitle: 'Upcoming Games',
  upcomingHighligth: highlightMock,
  freeGames: [gamesMock[0]],
  freeGamesTitle: 'Free Games',
  freeHighligth: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner and Show', () => {
    render(<Home {...props} />)

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
  })
})
