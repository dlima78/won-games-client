import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Nome"
        type="text"
        icon={<AccountCircle />}
      />
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
      <TextField
        name="passwordConfirm"
        placeholder="Confirmar senha"
        type="password"
        icon={<Lock />}
      />
      <Button size="large" fullWidth>
        Criar conta
      </Button>
      <FormLink>
        Já tem uma conta?
        <Link href="sign-in">
          <a>Entrar</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
