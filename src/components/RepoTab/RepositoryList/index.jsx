import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../../../hooks/useRepositories'
import SearchBar from '../../SearchBar'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

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

export const RepositoryListContainer = ({ repositories, navigation, onEndReach }) => {

  const repositoryNodes = repositories.edges
  ? repositories.edges.map(edge => edge.node)
  : repositories

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(repo) => 
        <TouchableOpacity key={repo.item.id} onPress={() => navigation.navigate('Repository', {
          id: repo.item.id,
          repo: repo.item
        })}>
          <RepositoryItem repo={repo.item} /> 
        </TouchableOpacity >
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

const RepositoryList = ({ navigation, route }) => {
  const [search, setSearch] = useState('')
  const [searchValue] = useDebounce(search, 500)
  const { orderBy } = route.params ? route.params : 'CREATED_AT'
  const { orderDirection } = route.params ? route.params : 'DESC'

  const { repositories, fetchMore } = useRepositories({ orderBy, orderDirection, searchValue, first: 8})

  const onEndReach = () => {
    if (repositories) {
      fetchMore()
    }
  }

  return (
    <>
      <SearchBar value={search} setSearch={setSearch} />
      <RepositoryListContainer repositories={repositories ? repositories : []} navigation={navigation} onEndReach={onEndReach} />
    </>

  )
}

export default RepositoryList