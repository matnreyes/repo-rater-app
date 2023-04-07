import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'
import { ALL_REPOSITORIES, EXPANDED_REPO, USER_INFO } from '../graphql/queries'

const useDeleteReview = () => {
  const [mutation] = useMutation(DELETE_REVIEW)

  const deleteReview = async (id) => {
    console.log('hello')
    await mutation({
      variables: { deleteReviewId: id },
      refetchQueries: [
        { query: USER_INFO, variables: { includeReviews: true }  },
        { query: EXPANDED_REPO, variables: { id } },
        { query: ALL_REPOSITORIES }
      ]
    })
  }

  return deleteReview
}

export default useDeleteReview