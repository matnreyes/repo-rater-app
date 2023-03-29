import { ActionSheetIOS, TouchableOpacity, StyleSheet } from 'react-native'
import { SFSymbol } from 'react-native-sfsymbols'
// import useRepositories from '../hooks/useRepositories'
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
  // const [repositories, refetchRepos] = useRepositories()
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
      async (buttonIndex) => {
        const repoSort = {
          orderType: '',
          direction: ''
        }
        switch (buttonIndex) {
          case 0: 
            repoSort.orderType = 'CREATED_AT'
            repoSort.direction = 'DESC'
            break
          case 1:
            repoSort.orderType = 'RATING_AVERAGE'
            repoSort.direction = 'DESC'
            break
          case 2:
            repoSort.orderType = 'RATING_AVERAGE'
            repoSort.direction = 'ASC'
            break
          default:
            break
        }
        
        // await refetchRepos(repoSort)
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