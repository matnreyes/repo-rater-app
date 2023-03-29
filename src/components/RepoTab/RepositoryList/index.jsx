import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../../../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  selector: {
    width: 200,
    height: 200,
    marginVertical: 10
  },
  selectorItems: {
    fontSize: 10
  }
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, navigation }) => {

  const repositoryNodes = repositories.edges
  ? repositories.edges.map(edge => edge.node)
  : repositories

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(repo) => 
        <Pressable key={repo.item.id} onPress={() => navigation.navigate('Repository', {
          id: repo.item.id
        })}>
          <RepositoryItem repo={repo.item} /> 
        </Pressable >
      }
    />
  )
}

const RepositoryList = ({navigation}) => {
  const [ repositories ] = useRepositories()

  return <RepositoryListContainer repositories={repositories} navigation={navigation}/>
}

export default RepositoryList