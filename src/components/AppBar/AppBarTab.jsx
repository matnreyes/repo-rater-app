import { Pressable, Text } from 'react-native'
import { Link } from 'react-router-native'

import theme from '../../theme'

const AppBarTab = ({ label, path }) => {
  const style = {
    text: {
      color: theme.colors.textSecondary,
      fontWeight: 'bold',
      fontSize: 15,
      padding: 10,
      marginTop: 6,
    }
  }
  return (
    <Pressable style={style.container}>
      <Link to={path}>
        <Text style={style.text}>{label}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab