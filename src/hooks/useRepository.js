import { useQuery } from '@apollo/client'
import { EXPANDED_REPO } from '../graphql/queries'

const useRepository = (variables) => {
  const { data, loading, error, fetchMore } = useQuery(EXPANDED_REPO, {
    variables: { ...variables },
    fetchPolicy: 'cache-and-network'
  })

  if (loading) return !loading
  if (error) return error

  const handleFetchMore = () => {
    const canFetchMore = data?.repository.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.pageInfo.endCursor,
        ...variables
      }
    })

    console.log('here')
  }

  return {
    repository: data.repository,
    fetchMore: handleFetchMore
  }
}

export default useRepository