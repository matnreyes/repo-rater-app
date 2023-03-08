import { useForm } from 'react-hook-form'

import FormInput from '../FormInput'
import AppButton from '../AppButton'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet } from 'react-native'

const SignIn = () => {
  const { control, handleSubmit } = useForm()
  const navigate = useNavigate('/')

  const login = (data) => {
    console.log(data)
    navigate('/')
  }

  const styles = StyleSheet.create({
    loginContainer: {
      backgroundColor: 'white',
      paddingTop: 10,
      paddingBottom: 10
    },
  })

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
      <AppButton onPress={handleSubmit(login)} text="sign in" type="submitLarge" style={styles.loginButton}/>
    </View>
  )
}

export default SignIn