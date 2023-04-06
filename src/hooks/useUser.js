import { useQuery } from '@apollo/client'
import { USER_INFO } from '../graphql/queries'

const useUser = (includeReviews = false) => {
  const { data, loading, error } = useQuery(USER_INFO, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network'
  })

  if (loading) return !loading
  if (error) return error

  const { me } = data
  return me
}

export default useUser