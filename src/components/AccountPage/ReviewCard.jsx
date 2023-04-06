import { StyleSheet, View } from 'react-native'
import Text from '../Text'
import { format } from 'date-fns'
import theme from '../../theme'

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

const ReviewCard = ({ review }) => {
  const date = format(new Date(review.createdAt), 'MM.dd.yyyy')
  return (
    <View style={styles.reviewCard}>
      <View style={styles.rating}>
      <Text style={{color: theme.colors.primary, fontSize: 18 }} fontWeight="bold">{review.rating}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text color="textPrimary" fontWeight="bold" fontSize="subheading">{review.repository.fullName}</Text>
        <Text style={{ color: theme.colors.secondary, marginBottom: 2 }}>{date}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewCard