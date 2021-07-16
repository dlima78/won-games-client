import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom size="small">
      Meus Pedidos
    </Heading>
    {items.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="Você ainda não possui pedidos"
        description="Volte para a loja e aproveite as nossas ofertas"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
