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
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int = 8, $after: String = "") {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        node {
          ...RepoInfo
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${REPO_INFO}
`

export const USER_INFO = gql`
  query UserInfo ($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
        edges {
          node {
            text
            repositoryId
            repository {
              fullName
            }
            rating
            createdAt
            id
          }
        }
      }
    }
  }
`

export const EXPANDED_REPO = gql`
  query Repository($id: ID!, $first: Int = 6, $after: String = "") {
    repository(id: $id) {
      ...RepoInfo
      reviews (first: $first, after: $after){
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
        pageInfo {
          endCursor
          hasNextPage
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