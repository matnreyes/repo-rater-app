import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'

import Main from './src/components/Main'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/hooks/useAuthStorage'
import { NavigationContainer } from '@react-navigation/native'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => (
  <NavigationContainer>
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <Main />
      </AuthStorageContext.Provider>
    </ApolloProvider>
  </NavigationContainer>
)

export default App