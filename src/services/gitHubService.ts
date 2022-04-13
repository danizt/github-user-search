import { GitHubUser } from '../types'
const API_URL = 'https://api.github.com'
const PER_PAGE = 10

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
