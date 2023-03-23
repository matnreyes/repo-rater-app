import { useQuery } from '@apollo/client'
import { EXPANDED_REPO } from '../graphql/queries'
import { useParams } from 'react-router-native'

import { useEffect, useState } from 'react'

const useRepository = () => {
  const [repo, setRepo] = useState()
  const { id } = useParams()

  const { data, loading } = useQuery(EXPANDED_REPO, {
    variables: { id },
    fetchPolicy: 'cache-first'
  })

  useEffect(() => {
    if (!loading) {
      setRepo(data.repository)
    }
  }, [data])

  return repo
}

export default useRepository