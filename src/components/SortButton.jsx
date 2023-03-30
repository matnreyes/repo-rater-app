import { ActionSheetIOS, TouchableOpacity, StyleSheet } from 'react-native'
import { SFSymbol } from 'react-native-sfsymbols'
import { useNavigation } from '@react-navigation/native'
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
  const navigation = useNavigation()
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
      (buttonIndex) => {
        if (buttonIndex === 3) {
          return
        }

        const repoSort = {
          orderBy: 'CREATED_AT',
          orderDirection: 'DESC'
        }

        if (buttonIndex === 1) {
          repoSort.orderBy = 'RATING_AVERAGE'
          repoSort.orderDirection = 'DESC'
        } else if (buttonIndex === 2) {
          repoSort.orderBy = 'RATING_AVERAGE'
            repoSort.orderDirection = 'ASC'
        }

        navigation.navigate('Repositories', { ...repoSort })
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