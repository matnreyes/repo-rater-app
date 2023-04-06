import { useAuthStorage } from './useAuthStorage'
import { useApolloClient } from '@apollo/client'

export const useSignOut = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    await client.resetStore()
  }

  return signOut
}