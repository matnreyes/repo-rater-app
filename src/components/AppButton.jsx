import { TouchableOpacity, StyleSheet } from 'react-native'
import Text from './Text'

import theme from '../theme'

const AppButton = ({ onPress, text, type, style }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.secondary,
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 6,
      overflow: 'hidden',
      padding: 20,
      fontSize: 14,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'flex-start'
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
    },
    largeButton: {
      width: '95%',
      alignSelf: 'center',
      textAlign: 'center'
    },
    delete: {
      backgroundColor: theme.colors.error
    }
  })

  const styleSwitch = () => {
    switch (type) {
      case 'submit':
        return styles.submitButton
      case 'submitLarge':
        return [styles.submitButton, styles.largeButton]
      case 'delete': 
        return [styles.delete]
      default:
        return styles.button
    }
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.button, styleSwitch(), style]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default AppButton