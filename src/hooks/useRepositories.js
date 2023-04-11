import { useQuery } from '@apollo/client'
import { ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = (variables) => {
  const { loading, error, data, fetchMore } = useQuery(ALL_REPOSITORIES, {
    variables: { ...variables },
    fetchPolicy: 'cache-and-network'
  })

  if (loading) return loading
  if (error) return error

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      }
    })
  }

  return { 
    repositories: data.repositories,
    fetchMore: handleFetchMore
  }
}

export default useRepositories