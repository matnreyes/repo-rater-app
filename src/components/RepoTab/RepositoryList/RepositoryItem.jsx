import { View, Image, Linking } from 'react-native'
import Text from '../../Text'
import theme from '../../../theme'
import AppButton from '../../AppButton'

const styles= {
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginBottom: 40,
  },
  titleContainer: {
    margin: 10
  },
  rowContainer: {
    flexDirection: 'row'
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 5
  },
  info: {
    textAlign: 'center',
    marginBottom: 10,
  }
}

const RepoItemContainer = ({ repo }) => ( 
  <View testID="repositoryItem" style={styles.container}>
    <View style={styles.rowContainer}>
      <Image style={styles.avatar} source={{uri: repo.ownerAvatarUrl}}/>
      <View style={styles.titleContainer}>
        <Text testID="name" color="textPrimary" fontWeight="bold" fontSize="subheading">{repo.fullName}</Text>
        <Text testID="description" color="textPrimary">{repo.description}</Text>
        <Text testID="language" style={styles.language}>{repo.language}</Text>
      </View>
    </View>
    <View style={[styles.rowContainer, {justifyContent: 'space-evenly'}]}>
      <Text testID="stars" style={styles.info}>
        <Text fontWeight="bold">{repo.stars}{'\n'}</Text>
        <Text>stars</Text>
      </Text>
      <Text testID="forks" style={styles.info}>
        <Text fontWeight="bold">{repo.forks}{'\n'}</Text>
        <Text>forks</Text>
      </Text>
      <Text testID="reviews" style={styles.info}>
        <Text fontWeight="bold">{repo.reviews}{'\n'}</Text>
        <Text>reviews</Text>
      </Text>
      <Text testID="rating" style={styles.info}>
        <Text fontWeight="bold">{repo.ratingAverage}{'\n'}</Text>
        <Text>rating</Text>
      </Text>
    </View>
    {repo.url && <AppButton type="submitLarge" text="Open in GitHub" onPress={() => Linking.openURL(repo.url)} style={styles.shadowProp}/>}
  </View>
)

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

  const parsedRepository = {
    ...repo,
    forks: shortenNum(repo.forksCount),
    stars: shortenNum(repo.stargazersCount),
    reviews: shortenNum(repo.reviewCount)
  }

  return <RepoItemContainer repo={parsedRepository} />
}

export default RepositoryItem