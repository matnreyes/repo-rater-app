import { useQuery } from '@apollo/client'
import { ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  console.log('hello world')
  const { data, loading, refetch } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-first'
  })

  return { repositories: !loading && data.repositories, loading, refetch } 
}

export default useRepositories