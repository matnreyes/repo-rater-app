import RepositoryItem from "../RepositoryList/RepositoryItem";
import useRepository from '../../../hooks/useRepository'
import { FlatList, View, StyleSheet } from 'react-native'
import format from 'date-fns/format'
import theme from "../../../theme";
import Text from "../../Text"

const style = StyleSheet.create({
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
  reviewCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 15,
    marginVertical: 5
  },
  rightContainer: {
    marginHorizontal: 10,
    flex: 1
  }
})

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), 'MM.dd.yyyy')
  return (
    <View style={style.reviewCard}>
      <View style={style.rating}>
        <Text style={{color: theme.colors.primary, fontSize: 18 }} fontWeight="bold">{review.rating}</Text>
      </View>
      <View style={style.rightContainer}>
        <Text color="textPrimary" fontWeight="bold" fontSize="subheading">{review.user.username}</Text>
        <Text style={{ color: theme.colors.secondary, marginBottom: 2 }}>{date}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}

const Repository = ({ route }) => {
  const repository = route.params.repo
  const fetchedReviews = useRepository(route)

  return fetchedReviews
    ?
      <FlatList 
        data={fetchedReviews?.reviews.edges}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        keyExtractor={({ node }) => node.id}
        ListHeaderComponent={() => <RepositoryItem repo={repository} route={route} />}
      />
    :
      <>
        <RepositoryItem route={route} repo={repository} />
        <Text>loading...</Text>
      </>
}

export default Repository 