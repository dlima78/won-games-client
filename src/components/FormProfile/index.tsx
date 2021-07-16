import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading size="small" lineBottom color="black">
      Meu perfil
    </Heading>
    <S.Form>
      <TextField name="name" placeholder="Name" label="name" />
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        initialValue="johndoe@email.com"
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
