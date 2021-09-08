import { useEffect } from 'react'
import Link from 'next/dist/client/link'
import { Done } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { useCart } from 'hooks/use-cart'

import * as S from './styled'

export type SuccessTemplateProps = {
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const SuccessTemplate = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: SuccessTemplateProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])
  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purshase was successful!</S.Heading>
          <S.CheckMark>
            <Done />
          </S.CheckMark>
          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
            Enjoy!
          </S.Text>
        </S.Wrapper>
        <Showcase
          title={recommendedTitle}
          highlight={recommendedHighlight}
          games={recommendedGames}
        />
      </Container>
    </Base>
  )
}

export default SuccessTemplate
