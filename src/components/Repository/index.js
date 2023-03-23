import RepositoryItem from "../RepositoryList/RepositoryItem";
import useRepository from '../../hooks/useRepository'

const Repository = ({ route }) => {
  const repository = useRepository(route)
  return repository && <RepositoryItem repo={repository}/>
}

export default Repository