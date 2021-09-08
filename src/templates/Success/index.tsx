import Link from 'next/dist/client/link'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import Showcase from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styled'
import { Done } from '@styled-icons/material-outlined'

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
