import { View, Image } from 'react-native'
import Text from '../Text'
import theme from '../../theme'

const RepositoryItem = ({ repo }) => {
  const shortenNum = (number) => {
    if (number > 999999) {
        return `${(number / 1000000).toPrecision(3)}m` 
    }
    if (number > 999) {
      return `${(number / 1000).toPrecision(3)}k`
    }
    return number
  }

  const stars = shortenNum(repo.stargazersCount)
  const forks = shortenNum(repo.forksCount)
  const reviews = shortenNum(repo.reviewCount)

  const styles= {
    container: {
      backgroundColor: 'white',
    },
    avatar: {
      width: 55,
      height: 55,
      borderRadius: 10,
      marginBottom: 40,
    },
    titleContainer: {
      padding: 10,
    },
    rowContainer: {
      margin: 10,
      flexDirection: 'row',
    },
    language: {
      backgroundColor: theme.colors.primary,
      color: 'white',
      alignSelf: 'flex-start',
      paddingTop: 5,
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 6,
      overflow: 'hidden'
    }
  }
  return ( 
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.avatar} source={{uri: repo.ownerAvatarUrl}}/>
        <View style={styles.titleContainer}>
          <Text color="textPrimary" fontWeight="bold">{repo.fullName}</Text>
          <Text color="textPrimary">{repo.description}</Text>
          <Text style={styles.language}>{repo.language}</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text textAlign="centered">
          <Text fontWeight="bold">{stars}{'\n'}</Text>
          <Text>stars</Text>
        </Text>
        <Text textAlign="centered">
          <Text fontWeight="bold">{forks}{'\n'}</Text>
          <Text>forks</Text>
        </Text>
        <Text textAlign="centered">
        <Text fontWeight="bold">{reviews}{'\n'}</Text>
        <Text>reviews</Text>
        </Text>
        <Text textAlign="centered">
          <Text fontWeight="bold">{repo.ratingAverage}{'\n'}</Text>
          <Text>rating</Text>
        </Text>
      </View>
    </View>
  )
}

export default RepositoryItem