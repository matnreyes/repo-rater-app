import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import RepositoryItem from './RepositoryList/RepositoryItem'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact/>
        <Route path="/signIn" element={<SignIn />} exact/>
        <Route path="*" element={<Navigate to="/" replace/>} />
        <Route path="/repo/:id" element={<RepositoryItem />} />
      </Routes>
    </View>
  )
}

export default Main