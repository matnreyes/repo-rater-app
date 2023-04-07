import { useQuery } from '@apollo/client'
import { EXPANDED_REPO } from '../graphql/queries'

const useRepository = ({ params }) => {
  const { id } = params

  const { data, loading, error } = useQuery(EXPANDED_REPO, {
    variables: { id },
    fetchPolicy: 'cache-and-network'
  })

  if (loading) return loading
  if (error) return error

  const { repository } = data
  return repository
}

export default useRepository