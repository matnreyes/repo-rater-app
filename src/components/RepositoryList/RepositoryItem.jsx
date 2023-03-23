import { View, Image, Linking } from 'react-native'
import Text from '../Text'
import theme from '../../theme'
import AppButton from '../AppButton'
import useRepository from '../../hooks/useRepository'

const RepoItemContainer = ({ repo }) => {
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
      padding: 10
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
  
  return ( 
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.avatar} source={{uri: repo.ownerAvatarUrl}}/>
        <View style={styles.titleContainer}>
          <Text testID="name" color="textPrimary" fontWeight="bold">{repo.fullName}</Text>
          <Text testID="description" color="textPrimary">{repo.description}</Text>
          <Text testID="language" style={styles.language}>{repo.language}</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, {justifyContent: 'space-evenly'}]}>
        <Text testID="stars" style={styles.info}>
          <Text fontWeight="bold">{stars}{'\n'}</Text>
          <Text>stars</Text>
        </Text>
        <Text testID="forks" style={styles.info}>
          <Text fontWeight="bold">{forks}{'\n'}</Text>
          <Text>forks</Text>
        </Text>
        <Text testID="reviews" style={styles.info}>
          <Text fontWeight="bold">{reviews}{'\n'}</Text>
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
}

const RepositoryItem = ({ repo }) => {
  if (repo) {
    return <RepoItemContainer repo={repo} />
  }
  
  const repository = useRepository()

  return repository && <RepoItemContainer repo={repository}/>
}

export default RepositoryItem