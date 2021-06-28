import Link from 'next/dist/client/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'
import * as S from './styles'

export type AuthTemplateProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthTemplateProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading size="huge">Seus jogos favoritos em um só lugar</Heading>
          <S.Subtitle>
            A <strong>WON</strong> é a melhor e mais completa plataforma de
            games.
          </S.Subtitle>
        </div>
        <S.Footer>Won Games 2021 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineLeft lineColor="secondary">
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
