import { StyleSheet } from 'react-native'

import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import RepositoryItem from './RepositoryList/RepositoryItem'
import theme from '../theme'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native'

import { useSignOut } from '../hooks/useSignOut'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  }
})

const Stack = createNativeStackNavigator()

const Main = () => {
  const [user, signOut] = useSignOut()
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Repositories" 
        component={RepositoryList}
        options={({ navigation}) => ({
          headerRight: () => (
            <>
              {!user
                ? <Button title="Sign in" colors={theme.colors.textPrimary} onPress={() => navigation.navigate('Sign in')}/>
                : <Button title="Sign out" colors={theme.colors.textPrimary} onPress={() => signOut()}/>
              }
            </>
          )
        })}
      />
      <Stack.Screen name="Sign in" component={SignIn} />
      <Stack.Screen name="Repository" component={RepositoryItem} />
    </Stack.Navigator>
  )
}

export default Main