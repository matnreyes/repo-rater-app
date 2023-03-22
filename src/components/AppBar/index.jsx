import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'

import { useSignOut } from '../../hooks/useSignOut'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary
  }
})

const AppBar = () => {
  const [user, signOut] = useSignOut()

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab label="Repositories" path="/" />
        {user
        ? <AppBarTab label="Sign out" path="/" onPress={signOut}/>
        : <AppBarTab label="Sign in" path="/signin" />
        }
      </ScrollView>
    </View>
  )
}

export default AppBar