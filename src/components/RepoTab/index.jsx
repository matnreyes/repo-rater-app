import RepositoryList from './RepositoryList'
import Repository from './Repository'
import SortButton from '../SortButton'
import theme from '../../theme'

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()


const header = {
  headerStyle: {
    backgroundColor: theme.colors.secondary,
  },
  headerTintColor: 'white'
}

const RepoTab = () => {
  return (
    <Stack.Navigator screenOptions={() => header} >
        <Stack.Screen name="Repositories" component={RepositoryList} options={{ headerRight: () => <SortButton /> }}/>
        <Stack.Screen name="Repository" component={Repository} />
    </Stack.Navigator>
  )
}
export default RepoTab