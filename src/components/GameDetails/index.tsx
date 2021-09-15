import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type Plataform = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  platforms: Plataform[]
  publisher: string
  releaseDate: string
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  platforms,
  publisher,
  developer,
  releaseDate,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper data-cy="game-details">
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Desription>{developer}</S.Desription>
        </S.Block>
        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Desription>
            {new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Desription>
        </S.Block>
        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Plataform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Desription>{publisher}</S.Desription>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Desription>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Desription>
        </S.Block>
        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Desription>{genres.join(' / ')}</S.Desription>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
