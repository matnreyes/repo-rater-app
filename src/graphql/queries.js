import { gql } from '@apollo/client'

export const ALL_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
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
      }
    }
  }
`