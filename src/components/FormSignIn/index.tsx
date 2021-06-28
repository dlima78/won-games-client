import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormWrapper, FormLink } from 'components/Form'
import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Esqueceu a senha?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Entrar
      </Button>
      <FormLink>
        Ainda não tem uma conta?
        <Link href="sign-up">
          <a>Cadastre-se</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
