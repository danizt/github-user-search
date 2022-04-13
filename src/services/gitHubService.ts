import { GitHubUser } from "../types"
const API_URL = "https://api.github.com"
const PER_PAGE = 50

export async function findUserByName(name: string) {
  const users: GitHubUser[] = []

  const response = await fetch(
    `${API_URL}/search/users?q=${name}&per_page=${PER_PAGE}`
  )
  const jsonObject = await response.json()

  jsonObject.items.forEach((item: any) => {
    users.push({
      id: item.id,
      login: item.login,
    })
  })
  return users
}
