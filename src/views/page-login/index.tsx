import React from 'react'
import LoginForm from './components/LoginForm'

type Props = {}

const LoginUI = (props: Props) => {
  return (
    <div>
        <p>TIme to sign in</p>
        <LoginForm/>
    </div>
  )
}

export default LoginUI