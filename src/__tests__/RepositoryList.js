/* eslint-disable jest/expect-expect */
import { RepositoryListContainer } from '../components/RepositoryList'
import { render, screen, within } from '@testing-library/react-native'

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor:
      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};

describe('Repository List', () => {
  describe('RepositoryListContainer', () => {
    it('renders reposity information correctly', () => {
      render(<RepositoryListContainer repositories={repositories}/>)
      const repos = screen.getAllByTestId('repositoryItem')
      
      const shortenNum = (number) => {
        if (number > 999999) {
            return `${(number / 1000000).toPrecision(3)}m` 
        }
        if (number > 999) {
          return `${(number / 1000).toPrecision(3)}k`
        }
        return number
      }
    
      repos.forEach((repo, index) => {
        const repository = repositories.edges[index].node

        const name = within(repo).getByTestId('name')
        expect(name).toHaveTextContent(repository.fullName)

        const description = within(repo).getByTestId('description')
        expect(description).toHaveTextContent(repository.description)

        const language = within(repo).getByTestId('language')
        expect(language).toHaveTextContent(repository.language)

        const forks = within(repo).getByTestId('forks')
        expect(forks).toHaveTextContent(shortenNum(repository.forksCount))

        const reviews = within(repo).getByTestId('reviews')
        expect(reviews).toHaveTextContent(shortenNum(repository.reviewCount))

        const rating = within(repo).getByTestId('rating')
        expect(rating).toHaveTextContent(repository.ratingAverage)
      })
    })
  })
})