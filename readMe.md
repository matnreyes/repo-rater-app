## Introduction
RepoRater is a social media platform for developers by developers. RepoRater users can rate their favorite Github repositories and share their thoughts on them with other users on the platform. Built on React Native, using a GraphQL server as a backend platform, RepoRater also utilizes Apollo Client for handling data management and communication with the server.

## Features:

-   Authentication: Users can sign up, log in, and log out using their email and password or via their Github account.
-   Repositories: Users can browse and search for repositories on the platform, view detailed information about them, and rate them using a five-star rating system.
-   Reviews: Users can write reviews about repositories they've used, rate other users' reviews, and see the most recent and highest-rated reviews on each repository's page.
-   Follows: Users can follow other users on the platform to see their latest activity and repositories they've rated and reviewed.
-   Notifications: Users receive notifications when someone follows them or rates one of their repositories.

## Technical details:

-   React Native was chosen for its cross-platform compatibility and ease of use for building mobile apps.
-   GraphQL was chosen as the backend platform for its efficient data fetching and flexibility in defining data schemas and queries.
-   Apollo Client was chosen as the data management library for its ease of use and powerful features, such as caching and optimistic UI updates.

## Installation: 

To run the app locally, follow these steps:
1.  Clone the repository: `git clone https://github.com/matnreyes/repo-rater-app.git
2.  Navigate to the project directory: `cd ios`
3.  Install the dependencies: `npx pod install cd ..`
5.  Install the dependencies: `npm install`
6.  Run the app: `npx react-native start`

Contributing: We welcome contributions from the community. If you'd like to contribute to RepoRater, please fork the repository and submit a pull request with your changes.