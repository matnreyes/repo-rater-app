import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from '../Text'

const AppBarTab = ({ label, path, onPress }) => {
  const style = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10
    },
    text: {
      fontSize: 16
    }
  })
  return (
    <Link style={style.container} to={path} onPress={onPress}>
      <Text color="textSecondary" fontWeight="bold" style={style.text}>{label}</Text>
    </Link>
  )
}

export default AppBarTab