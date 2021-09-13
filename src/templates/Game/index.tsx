import Image from 'next/image'
import { NextSeo } from 'next-seo'

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
  slug: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle: string
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcommingGames,
  upcommingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - Won Games `}
      description={gameInfo.description}
      canonical={`https://wongames.eduardolima.com.br/game/${slug}`}
      openGraph={{
        url: `https://wongames.eduardolima.com.br/game/${slug}`,
        title: `${gameInfo.title} - Won Games`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />
    <S.Cover>
      <Image src={cover} alt={gameInfo.title} layout="fill" />
    </S.Cover>

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
        title={upcomingTitle}
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
