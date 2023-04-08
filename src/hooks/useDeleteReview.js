import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'
import { EXPANDED_REPO, USER_INFO } from '../graphql/queries'

const useDeleteReview = () => {
  const [mutation] = useMutation(DELETE_REVIEW)

  const deleteReview = async (id, repoId) => {
    await mutation({
      variables: { deleteReviewId: id },
      refetchQueries: [{ query: EXPANDED_REPO, variables: { id: repoId } }],
      update: (cache) => {
        cache.updateQuery({ query: USER_INFO, variables: { includeReviews: true } }, ({ me }) => {
          return {
            me: {
              ...me,
              reviews: { ...me.reviews, edges: me.reviews.edges.filter(e => e.node.id !== id) }
              
            }
          }
        })
      }
    })
  }

  return deleteReview
}

export default useDeleteReview