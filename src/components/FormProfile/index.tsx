import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom size="small" color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField name="name" placeholder="Name" label="Name" />

      <TextField
        name="email"
        placeholder="Email"
        label="Email"
        type="email"
        initialValue="email@email.com"
        disabled
      />

      <TextField
        name="password"
        placeholder="Type your password"
        label="Password"
        type="password"
      />

      <TextField
        name="new_password"
        placeholder="New password"
        label="New password"
        type="password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
