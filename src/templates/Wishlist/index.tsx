import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'
import Heading from 'components/Heading'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import Empty from 'components/Empty'
import { useWishlist } from 'hooks/use-wishlist'
import Loader from 'components/Loader'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`whishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="your wishlist is empty"
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
}
export default Wishlist
