import { GitHubUser } from "../types"
// const API_URL = "https://api.github.com/search/users"

export async function findUserByName(name: string) {
  const users: GitHubUser[] = [
    { userName: "user1" },
    { userName: "user2" },
    { userName: "user3" },
  ]

  return users
}
