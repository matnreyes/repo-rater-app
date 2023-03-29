import { useQuery } from '@apollo/client'
import { ALL_REPOSITORIES } from '../graphql/queries'
import { useState, useEffect} from 'react'

const useRepositories = () => {
  // const { data, loading, refetch } = useQuery(ALL_REPOSITORIES, {
  //   variables: { orderBy: orderType ? orderType : '', orderDirection: direction ? direction : ''},
  //   fetchPolicy: 'cache-first'
  // })

  // return { repositories: !loading && data.repositories, loading, refetch } 

  const [repositories, setRepositories] = useState([])
  const { data: initialData, loading, refetch } = useQuery(ALL_REPOSITORIES)

  useEffect(() => {
    if (!loading) {
      setRepositories(initialData.repositories)
    }
  }, [loading])

  const refetchRepos = async ({ orderType, direction }) => {
    console.log( orderType )
    const { data } = await refetch({ 
      orderBy: orderType ? orderType : '', orderDirection: direction ? direction : '' 
    })
    return data.repositories
  }

  return [repositories, refetchRepos]
}

export default useRepositories