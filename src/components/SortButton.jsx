import { ActionSheetIOS, TouchableOpacity, StyleSheet } from 'react-native'
import { SFSymbol } from 'react-native-sfsymbols'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    marginRight: 25,
    marginTop: 25,
  }
})

const SortButton = () => {
  const onPress = () => (
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Latest repositories',
          'Highest rated repositories',
          'Lowest rated repositories',
          'Cancel'
        ],
        cancelButtonIndex: 3,
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          console.log(buttonIndex)
        }
      }
    )
  )

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <SFSymbol name="arrow.up.arrow.down.circle" size="25" color={theme.colors.primary}/>
    </TouchableOpacity>
  )
}

export default SortButton