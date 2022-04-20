import { useState } from 'react'
import { useTheme } from 'react-jss'
import { SearchUsersStyle } from './searchUsers.jss'
import { SearchBox } from '@fluentui/react/lib/SearchBox'
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack'
import { DefaultButton } from '@fluentui/react'
import { findUserByName } from '../../services/gitHubService'
import { GitHubUser } from '../../types'
import { UserList } from '../userList/userList'

export const SearchUsers = () => {
  const theme = useTheme() as any
  const searchUsersStyle = SearchUsersStyle(theme)
  const stackTokens: Partial<IStackTokens> = {}

  const [users, setUsers] = useState<GitHubUser[]>()
  const [inputValue, setInputValue] = useState<string>()

  const handleSearch = async (term: string | undefined) => {
    if (term) {
      findUserByName(term)
        .then((users) => setUsers(users))
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <Stack
        tokens={stackTokens}
        className={searchUsersStyle.searchUsersContainer}
      >
        <SearchBox
          placeholder="Search"
          onChange={(_, v) => setInputValue(v)}
          onSearch={() => handleSearch(inputValue)}
          className={searchUsersStyle.searchBox}
        />
        <DefaultButton
          text="Search"
          onClick={() => handleSearch(inputValue)}
          allowDisabledFocus
          className={searchUsersStyle.searchUsersButton}
        />
      </Stack>
      {users ? <UserList users={users} /> : null}
    </>
  )
}
