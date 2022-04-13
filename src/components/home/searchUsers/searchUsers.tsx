import { SearchUsersStyle } from './searchUsers.jss'
import { useTheme } from 'react-jss'
import { SearchBox } from '@fluentui/react/lib/SearchBox'
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack'
import { Image, Text, DefaultButton } from '@fluentui/react'
import { findUserByName } from '../../../services/gitHubService'
import { useState } from 'react'
import { GitHubUser } from '../../../types'

export const SearchUsers = () => {
  const theme = useTheme() as any
  const searchUsersStyle = SearchUsersStyle(theme)
  const stackTokens: Partial<IStackTokens> = {}

  const [users, setUsers] = useState<GitHubUser[] | undefined>()

  const handleSearch = async (term: string) => {
    findUserByName(term)
      .then((users) => setUsers(users))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Stack
        tokens={stackTokens}
        className={searchUsersStyle.searchUsersContainer}
      >
        <SearchBox
          placeholder="Search"
          onSearch={(newValue) => handleSearch(newValue)}
          className={searchUsersStyle.searchBox}
        />
        <DefaultButton
          text="Search"
          onClick={() => console.log('value is ')}
          allowDisabledFocus
          className={searchUsersStyle.searchUsersButton}
        />
      </Stack>
      <Stack className={searchUsersStyle.usersContainer}>
        {users?.map((user, index) => (
          <div key={index} className={searchUsersStyle.userContainer}>
            <Image
              src={user.avatarUrl}
              alt="Example with no image fit value and height or width is specified."
              width={50}
              height={50}
            />
            <Text variant="large" nowrap block>
              {user.login}
            </Text>
            {/* <Text variant="large" nowrap block>
              {user.htmlUrl}
            </Text> */}
          </div>
        ))}
      </Stack>
    </>
  )
}
