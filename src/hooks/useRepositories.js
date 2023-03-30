import { useQuery } from '@apollo/client'
import { ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = (orderBy, orderDirection) => {
  const { loading, error, data } = useQuery(ALL_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: 'cache-and-network'
  })

  if (loading) return loading
  if (error) return error

  const { repositories } = data
  return { repositories }
}

export default useRepositories