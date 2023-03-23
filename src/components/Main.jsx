import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import theme from '../theme'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native'

import { useSignOut } from '../hooks/useSignOut'
import Repository from './Repository'

const Stack = createNativeStackNavigator()

const Main = () => {
  const [user, signOut] = useSignOut()
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: theme.colors.secondary
        },
        headerTintColor: 'white',
        headerRight: () => (
          <>
            {!user
              ? <Button title="Sign in"  onPress={() => navigation.navigate('Sign in')}/>
              : <Button title="Sign out" onPress={() => signOut()}/>
            }
          </>
        )
      })}
    >
      <Stack.Screen name="Repositories" component={RepositoryList} />
      <Stack.Screen name="Sign in" component={SignIn} />
      <Stack.Screen name="Repository" component={Repository} />
    </Stack.Navigator>
  )
}

export default Main