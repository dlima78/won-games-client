import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import Link from 'next/link'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Meu perfil">
        <AccountCircle size={24} />
        <span>Meu Perfil</span>
      </S.Link>
    </Link>
    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="Meus cartões">
        <CreditCard size={24} />
        <span>Meus Cartões</span>
      </S.Link>
    </Link>
    <Link href="/profile/orders" passHref>
      <S.Link
        isActive={activeLink === '/profile/orders'}
        title="Minhas compras"
      >
        <FormatListBulleted size={24} />
        <span>Minhas Compras</span>
      </S.Link>
    </Link>
    <Link href="/logout" passHref>
      <S.Link>
        <ExitToApp size={24} title="Sign out" />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
