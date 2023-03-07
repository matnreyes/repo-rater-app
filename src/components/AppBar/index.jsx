import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 25,
    paddingBottom: Constants.statusBarHeight / 3,
    paddingLeft: 20,
    backgroundColor: theme.colors.secondary,
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab label="Repositories"/>
    </View>
  )
}

export default AppBar