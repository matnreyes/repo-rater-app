import { StyleSheet, View, Alert } from 'react-native'
import Text from '../Text'
import { format } from 'date-fns'
import theme from '../../theme'
import AppButton from '../AppButton'
import useDeleteReview from '../../hooks/useDeleteReview'

const styles = StyleSheet.create({
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
    flowDirection: 'column',
    padding: 10,
    paddingBottom: 15,
    marginVertical: 5,
  },
  rightContainer: {
    marginHorizontal: 10,
    flex: 1
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

const ReviewCard = ({ review, navigation }) => {
  const deleteReview = useDeleteReview()
  const date = format(new Date(review.createdAt), 'MM.dd.yyyy')

  const handleDelete = async () => 
    Alert.alert('Delete review', `Are you sure you want to delete review for ${review.repository.fullName}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('cancelled'),
        style: 'cancel'
      },
      {text: 'Confirm', onPress: async () => await deleteReview(review.id, review.repositoryId)}
    ])

  return (
    <View style={styles.reviewCard}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.rating}>
          <Text style={{ color: theme.colors.primary, fontSize: 18 }} fontWeight="bold">{review.rating}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text color="textPrimary" fontWeight="bold" fontSize="subheading">{review.repository.fullName}</Text>
          <Text style={{ color: theme.colors.secondary, marginBottom: 2 }}>{date}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      <View style={styles.actionButtonContainer}>
        <AppButton style={{ paddingHorizontal: 50 }} type="submit" text="View repository" onPress={() => navigation.navigate('Repository', { id: review.repositoryId })} />
        <AppButton style={{ paddingHorizontal: 50 }} type="delete" text="Delete review" onPress={handleDelete} />
      </View>
    </View>
  )
}

export default ReviewCard