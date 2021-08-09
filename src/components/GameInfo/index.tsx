import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">
      {new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)}
    </Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />}>Add Adicionar</Button>
      <Button
        icon={<FavoriteBorder aria-label="whishlist" />}
        size="small"
        minimal
      >
        Lista de desejos
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
