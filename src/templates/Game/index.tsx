import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import TextContent from 'components/TextContent'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import { Divider } from 'components/Divider'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Em breve"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
      />
    </S.Main>
  </Base>
)

export default Game
