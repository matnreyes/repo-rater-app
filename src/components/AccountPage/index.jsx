import { View, StyleSheet } from 'react-native'
import { useSignOut } from '../../hooks/useSignOut'
import Text from '../Text'
import AppButton from '../AppButton'
// import { Entypo } from 'react-native-vector-icons/vector-icons'
import theme from '../../theme'

const style = StyleSheet.create({
  signupContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
})

const StartUp = ({ navigation }) => {
  return (
    <View style={style.signupContainer}>
      {/* <Entypo size={'200'} name="github" color={theme.colors.secondary}/> */}
      <Text>Gain access to great features by signing into RepoRater. </Text>
      <AppButton type="submitLarge" text="Sign into your RepoRater account" onPress={() => navigation.navigate('Sign In')}/>
      <AppButton type="submitLarge" text="Create a RepoRater account" onPress={() => navigation.navigate('Sign up')}/>
    </View>
  )
}

const AccountPage = ({ navigation }) => {
  const [user, signOut] = useSignOut()
  return user ? (
      <View>
        <Text>{user.username}</Text>
        <AppButton type="submitLarge" text="Sign out" onPress={() => signOut()}/>
      </View>
  )
  : <StartUp navigation={navigation}/>
}


export default AccountPage