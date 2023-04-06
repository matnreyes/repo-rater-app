import { View, StyleSheet, FlatList } from 'react-native'
import useUser from '../../hooks/useUser'
import Text from '../Text'
import AppButton from '../AppButton'
import ReviewCard from './ReviewCard'

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  separator: {
    height:10
  }
})

const StartUp = ({ navigation }) => {
  return (
    <View style={styles.signupContainer}>
      <Text>Gain access to great features by signing into RepoRater. </Text>
      <AppButton type="submitLarge" text="Sign into your RepoRater account" onPress={() => navigation.navigate('Sign In')}/>
      <AppButton type="submitLarge" text="Create a RepoRater account" onPress={() => navigation.navigate('Sign up')}/>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />

const ReviewList = ({ reviews }) => {
  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : []

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(review) => <ReviewCard review={review.item}/>}
    />
  )
}

const AccountPage = ({ navigation }) => {
  const user = useUser(true)
  return user ? (
    <ReviewList reviews={user.reviews} />
  )
  : <StartUp navigation={navigation}/>
}


export default AccountPage