import { Pressable, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from '../Text'

const AppBarTab = ({ label, path }) => {
  const style = StyleSheet.create({
    container: {
      paddingTop: 15,
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 10,
      marginRight: 10
    }
  })
  return (
    <Pressable style={style.container}>
      <Link to={path}>
        <Text color="textSecondary" fontWeight="bold">{label}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab