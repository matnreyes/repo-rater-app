import { useMutation, useApolloClient } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useCreateReview = () => {
  const client = useApolloClient()
  const [mutation]  = useMutation(CREATE_REVIEW)

  const createReview = async (review) => {
    const { data: { createReview } } = await mutation({ 
      variables: { 
        review: { ...review, rating: Number(review.rating) } 
      }
    })
    await client.resetStore()

    return createReview
  }

  return createReview
}

export default useCreateReview