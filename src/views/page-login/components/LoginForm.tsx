import { doSocialLogin } from '@/app/actions'
import React from 'react'

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <form action={doSocialLogin}>
        <button 
            className='bg-pink-300'
            type="submit" 
            name="action" 
            value="google"
        >Login with googel
        </button>
        <button 
            className='bg-blue-300'
            type="submit" 
            name="action" 
            value="github"
        >Login with github
        </button>
    </form>
  )
}

export default LoginForm