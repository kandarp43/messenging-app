import styled from 'styled-components'
import Head from 'next/head'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {
  const signin = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <div>
      <Container>
        <Head>
          <title>Login</title>
        </Head>
        <LoginContainer>
          <Logo src='https://via.placeholder.com/150' />
          <Cbutton onClick={signin}>click here</Cbutton>
        </LoginContainer>
      </Container>
    </div>
  )
}

export default Login
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: #f5f5f5;
`
const Cbutton = styled(Button)`
  &&& {
    background: #f5f5f5;
  }
  :hover {
    &&& {
      background: #c0c0c0;
    }
  }
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.7);
`
const Logo = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 40px;
`
