import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'
import Heading from 'components/Heading'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Whishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`whishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Sua lista de favoritos esta vazia"
          description="Jogos adicionados a favoritos aparecerão aqui"
          hasLink
        />
      )}

      <Divider />
    </Container>
    <Showcase
      title={recommendedTitle || 'You may like these games'}
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
