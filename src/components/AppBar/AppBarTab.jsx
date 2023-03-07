import { Pressable, Text } from 'react-native'

const AppBarTab = ({ label }) => {
  const style = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    main: 'system'
  }
  return (
    <Pressable>
      <Text style={style}>{label}</Text>
    </Pressable>
  )
}

export default AppBarTab