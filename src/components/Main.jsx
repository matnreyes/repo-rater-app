import theme from '../theme'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { useSignOut } from '../hooks/useSignOut'
import ReviewForm from './ReviewForm'
import AccountPage from './AccountPage'
import RepoTab from './RepoTab'
import Ionicons from '@expo/vector-icons/Ionicons'
import SignIn from './SignIn'
import SignUp from './SignUp'

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
        iconName = focused ? 'md-home' : 'md-home-outline'
        break
      case "Review form":
        iconName = focused ? 'add-circle' : 'add-circle-outline'
        break
      default:
        iconName = focused ? 'person-circle' : 'person-circle-outline'
        break
    }

    return <Ionicons name={iconName} size={size} color={color}/>
  }
})

const MainApp = () => {
  const [user] = useSignOut()
  return (
    <MainStack.Navigator screenOptions={header}>
      <MainStack.Screen name="Home" component={RepoTab} options={{ headerShown: false }}/>
      <MainStack.Screen name="Review form" component={!user ? AccountPage : ReviewForm} options={ { title: 'Write a review' } }/>
      <MainStack.Screen name="Account" component={AccountPage} />
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