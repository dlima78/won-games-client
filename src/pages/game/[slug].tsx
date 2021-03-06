import { useRouter } from 'next/dist/client/router'
import Game, { GameTemplateProps } from 'templates/Game'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { GetStaticProps } from 'next'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QueryUpcoming } from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { QueryHomeVariables } from 'graphql/generated/QueryHome'
import { getImageUrl } from 'utils/getImageUrl'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //Get game data
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  //Get recommended games
  const { data: recommendedData } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  //Get upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10)

  const { data: upcomingData } = await apolloClient.query<
    QueryUpcoming,
    QueryHomeVariables
  >({
    query: QUERY_UPCOMING,
    variables: { date: TODAY }
  })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.cover?.src)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `${getImageUrl(image.src)}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingTitle: upcomingData.showcase?.upcomingGames?.title,
      upcommingGames: gamesMapper(upcomingData.upcomingGames),
      upcommingHighlight: highlightMapper(
        upcomingData.showcase?.upcomingGames?.highlight
      ),
      recommendedTitle: recommendedData.recommended?.section?.title,
      recommendedGames: gamesMapper(recommendedData.recommended?.section?.games)
    }
  }
}
