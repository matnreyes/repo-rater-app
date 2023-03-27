import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'
import { useSignIn } from './useSignIn'

const useCreateUser = () => {
  const [mutation] = useMutation(CREATE_USER)
  const [signIn] = useSignIn()

  const createUser = async ({ username, password }) => {
    await mutation({
      variables: { user: { username, password } }
    })
    await signIn({ username, password })
  }

  return createUser
}

export default useCreateUser