export interface GitHubUser {
  login: string
  id: number
  nodeId: string
  avatarUrl: string
  gravatarId: number
  url: string
  htmlUrl: string
  followersUrl: string
  followingUrl: string
  gistsUrl: string
  starredUrl: string
  subscriptionsUrl: string
  organizationsUrl: string
  reposUrl: string
  eventsUrl: string
  receivedEventsUrl: string
  type: string
  siteAdmin: boolean
  score: number
}

export interface GitHubUserDetails extends GitHubUser {
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: boolean
  bio: string
  twitterUsername: string
  publicRepos: number
  publicGists: number
  followers: number
  following: number
  createdAt: string
  updatedAt: string
}
