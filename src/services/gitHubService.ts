import { GitHubUser, GitHubUserDetails } from '../types'
const API_URL = 'https://api.github.com'
const PER_PAGE = 30

export async function findUserByName(name: string) {
  const users: GitHubUser[] = []

  const response = await fetch(
    `${API_URL}/search/users?q=${name}&per_page=${PER_PAGE}`
  )
  const jsonObject = await response.json()

  jsonObject.items.forEach((item: any) => {
    users.push({
      login: item.login,
      id: item.id,
      nodeId: item.node_id,
      avatarUrl: item.avatar_url,
      gravatarId: item.gravatar_id,
      url: item.url,
      htmlUrl: item.html_url,
      followersUrl: item.followers_url,
      followingUrl: item.following_url,
      gistsUrl: item.gists_url,
      starredUrl: item.starred_url,
      subscriptionsUrl: item.subscriptions_url,
      organizationsUrl: item.organizations_url,
      reposUrl: item.repos_url,
      eventsUrl: item.events_url,
      receivedEventsUrl: item.received_events_url,
      type: item.type,
      siteAdmin: item.site_admin,
      score: item.score,
    })
  })

  return users
}

export async function getUserData(userUrl: string) {
  const response = await fetch(userUrl)
  const jsonObject = await response.json()

  const user: GitHubUserDetails = {
    login: jsonObject.login,
    id: jsonObject.id,
    nodeId: jsonObject.node_id,
    avatarUrl: jsonObject.avatar_url,
    gravatarId: jsonObject.gravatar_id,
    url: jsonObject.url,
    htmlUrl: jsonObject.html_url,
    followersUrl: jsonObject.followers_url,
    followingUrl: jsonObject.following_url,
    gistsUrl: jsonObject.gists_url,
    starredUrl: jsonObject.starred_url,
    subscriptionsUrl: jsonObject.subscriptions_url,
    organizationsUrl: jsonObject.organizations_url,
    reposUrl: jsonObject.repos_url,
    eventsUrl: jsonObject.events_url,
    receivedEventsUrl: jsonObject.received_events_url,
    type: jsonObject.type,
    siteAdmin: jsonObject.site_admin,
    score: 0,

    name: jsonObject.name,
    company: jsonObject.company,
    blog: jsonObject.blog,
    location: jsonObject.location,
    email: jsonObject.email,
    hireable: jsonObject.hireable,
    bio: jsonObject.bio,
    twitterUsername: jsonObject.twitter_username,
    publicRepos: jsonObject.public_repos,
    publicGists: jsonObject.public_gists,
    followers: jsonObject.followers,
    following: jsonObject.following,
    createdAt: jsonObject.created_at,
    updatedAt: jsonObject.updated_at,
  }

  return user
}
