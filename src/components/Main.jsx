import theme from '../theme'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native'

import useUser from '../hooks/useUser'
import ReviewForm from './ReviewForm'
import AccountPage from './AccountPage'
import RepoTab from './RepoTab'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { SFSymbol } from 'react-native-sfsymbols'
import { useSignOut } from '../hooks/useSignOut'

const MainStack = createBottomTabNavigator()
const RootStack = createStackNavigator()

const header = ({ route }) => ({
  headerStyle: {
    backgroundColor: theme.colors.secondary
  },
  headerTintColor: 'white',
  tabBarActiveTintColor: theme.colors.primary,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName

    switch(route.name) {
      case "Home":
        iconName = focused ? 'house.fill' : 'house'
        break
      case "Review form":
        iconName = 'square.and.pencil'
        break
      default:
        iconName = focused ? 'person.fill' : 'person'
        break
    }

    return <SFSymbol name={iconName} size={size} color={color}/>
  }
})

const MainApp = () => {
  const user = useUser()
  const signOut = useSignOut()
  return (
    <MainStack.Navigator screenOptions={header}>
      <MainStack.Screen name="Home" component={RepoTab} options={{ headerShown: false }}/>
      <MainStack.Screen name="Review form" component={user ? ReviewForm : AccountPage} options={ { title: 'Write a review' } }/>
      <MainStack.Screen name="Account" component={AccountPage} options={ { title: user ? user.username: 'Account', headerRight: () => user && <Button onPress={() => signOut()} title="Sign out"/> } } />
    </MainStack.Navigator>
  )

}

const Main = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Main" component={MainApp} options={{ headerShown: false }} />
      <RootStack.Group screenOptions={{ presentation: 'modal', headerStyle: { backgroundColor: theme.colors.secondary }, headerTintColor: 'white', headerBackTitle: 'Cancel' }} >
        <RootStack.Screen name="Sign In" component={SignIn} />
        <RootStack.Screen name="Sign up" component={SignUp} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default Main