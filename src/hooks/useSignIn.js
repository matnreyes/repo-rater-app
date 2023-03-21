import { useMutation } from '@apollo/client'
import { LOGIN } from '../graphql/mutations'

export const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN)

  const signIn = async ({ username, password }) => {
    const { data: { authenticate } } = await mutate({ variables: { username, password } })
    return authenticate.accessToken
  }

  return [signIn, result]
}