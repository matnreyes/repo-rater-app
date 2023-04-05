import { gql } from '@apollo/client'

const REPO_INFO = gql`
  fragment RepoInfo on Repository {
    fullName
    stargazersCount
    forksCount
    id
    reviewCount
    ratingAverage
    description
    ownerAvatarUrl
    language
  }
`

export const ALL_REPOSITORIES = gql`
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepoInfo
        }
      }
    }
  }
  ${REPO_INFO}
`

export const USER_INFO = gql`
  query {
    me {
      id
      username
    }
  }
`

export const EXPANDED_REPO = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...RepoInfo
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPO_INFO}
`

export const SORTED_REPOS = gql`
  query ($orderBy: AllRepositoriesOrderBy) {
    repositories {
      edges {
        node {
          ...RepoInfo
        }
      }
    }
  }
  ${REPO_INFO}
`