import { useForm } from 'react-hook-form'

import FormInput from '../FormInput'
import AppButton from '../AppButton'
import { View, StyleSheet } from 'react-native'

import { useSignIn } from '../../hooks/useSignIn'

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10
  },
})

export const SignInContainer = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm()

  const rules = {
    username: {
      required: 'Username is required',
      minLength: { value: 5, message: 'Username should be at least 5 characters long' }
    },
    password: {
      required: 'Password is required',
      minLength: { value: 8, message: 'Password should be least 8 characters long'}
    }
  }

  return (
    <View style={styles.loginContainer}>
      <FormInput name="username" placeholder="Username" control={control} rules={rules.username}/>
      <FormInput name="password" placeholder="Password" control={control} secureTextEntry rules={rules.password}/>
      <AppButton onPress={handleSubmit(onSubmit)} text="sign in" type="submitLarge" style={styles.loginButton}/>
    </View>
  )
}

const SignIn = ({ navigation }) => {
  const [signIn] = useSignIn()

  const onSubmit = async (data) => {
    try {
      await signIn(data)
      navigation.navigate('Repositories')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SignInContainer onSubmit={onSubmit}/>
  )
}

export default SignIn