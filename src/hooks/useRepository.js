import { useQuery } from '@apollo/client'
import { EXPANDED_REPO } from '../graphql/queries'

import { useEffect, useState } from 'react'

const useRepository = ({ params }) => {
  const [repo, setRepo] = useState()
  const { id } = params

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