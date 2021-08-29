import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading size="small" lineBottom color="black">
      Meu perfil
    </Heading>
    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        initialValue={email}
        label="Email"
        disabled
      />
      <TextField
        name="password"
        type="password"
        placeholder="Digite sua senha"
        label="Senha"
      />
      <TextField
        name="new_password"
        type="password"
        placeholder="Nova senha"
        label="Nova senha"
      />

      <Button size="large">Salvar</Button>
    </S.Form>
  </>
)

export default FormProfile
