import { useState, useEffect } from 'react'
import { useAuthStorage } from './useAuthStorage'
import { useQuery, useApolloClient } from '@apollo/client'
import { USER_INFO } from '../graphql/queries'

export const useSignOut = () => {
  const [user, setUser] = useState(null)
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const {data, loading} = useQuery(USER_INFO, {
    fetchPolicy: 'cache-first'
  })

  useEffect(() => {
    if (!loading) {
      setUser(data.me)
    }
  }, [data])

  const signOut = async () => {
    await authStorage.removeAccessToken()
    await client.resetStore()
  }

  return [user, signOut]
}