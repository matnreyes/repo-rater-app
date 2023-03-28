import { useForm } from 'react-hook-form'
import { View, StyleSheet  } from 'react-native'
import Text from '../Text'
import FormInput from '../FormInput'
import AppButton from '../AppButton'
import useCreateUser from '../../hooks/useCreateUser'

const style = StyleSheet.create({
  signupContainer: {
    backgroundColor: 'white',
    paddingTop: 10
  }
})

const SignUp = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm()
  const signUp = useCreateUser()

  const rules = {
    username: {
      required: 'Username is required',
      minLength: { value: 5, message: "Username must contain at least 4 characters "}
    },
    password: {
      required: 'Password is required',
      mindLength: { value: 8, message: "Password must container at least 8 characters"}
    },
    confirmPassword: {
      required: 'Please re-enter password',
      validate: (val) => {
        if (watch('password') !== val) {
          return 'Passwords do not match'
        }
      }
    }
  }

  const submit = async (data) => {
    try {
      await signUp(data)
      navigation.navigate('Home')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={style.signupContainer}>
      <FormInput name="username" placeholder="Username" control={control} rules={rules.username} />
      <FormInput name="password" placeholder="Password" control={control} rules={rules.password} secureTextEntry />
      <FormInput name="passwordConfirm" placeholder="Re-enter your password" control={control} rules={rules.confirmPassword} secureTextEntry />
      <AppButton type="submitLarge" text="Create an account" onPress={handleSubmit(submit)}/>
    </View>
  )
}

export default SignUp