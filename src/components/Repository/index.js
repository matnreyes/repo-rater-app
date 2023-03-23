import RepositoryItem from "../RepositoryList/RepositoryItem";
import useRepository from '../../hooks/useRepository'
import { FlatList, View, StyleSheet } from 'react-native'
import format from 'date-fns/format'
import theme from "../../theme";
import Text from "../Text";

const style = StyleSheet.create({
  list: {
    height: 10,
  },
  separator: {
    height: 10
  },
  rating: {
    color: theme.colors.primary,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10
  },
  rightContainer: {
    margin: 10
  },
  descriptionText: {
    marginRight: 10
  }
})

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), 'MM.dd.yyyy')
  return (
    <View style={style.topContainer}>
      <View style={style.rating}>
        <Text style={{color: theme.colors.primary}}fontWeight="bold">{review.rating}</Text>
      </View>
      <View style={style.rightContainer}>
        <Text color="textPrimary" fontWeight="bold" fontSize="subheading">{review.user.username}</Text>
        <Text style={{ color: theme.colors.secondary, marginBottom: 2 }}>{date}</Text>
        <Text style={style.descriptionText} >{review.text}</Text>
      </View>
    </View>
  )
}

const Repository = ({ route }) => {
  const repository = useRepository(route)
  return repository && 
  <>
    <FlatList 
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => <RepositoryItem repo={repository} />}
      ItemSeparatorComponent={() => <View style={style.separator} />}
      />
  </>
  }

export default Repository