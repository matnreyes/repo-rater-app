import { useAuthStorage } from './useAuthStorage'
import { useMutation, useApolloClient } from '@apollo/client'
import { LOGIN } from '../graphql/mutations'


export const useSignIn = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const [mutate, result] = useMutation(LOGIN)

  const signIn = async ({ username, password }) => {
    const { data: { authenticate } } = await mutate({ variables: { username, password } })
    await authStorage.setAccessToken(authenticate.accessToken)
    await client.resetStore()
  }

  return [signIn, result]
}