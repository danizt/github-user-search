import { useTheme } from 'react-jss'
import { UserListStyle } from './userList.jss'
import { Stack, Image, Text } from '@fluentui/react'
import { GitHubUser } from '../../types'

interface IUserListProps {
  users: GitHubUser[]
}

export const UserList = (props: IUserListProps) => {
  const theme = useTheme() as any
  const userListStyle = UserListStyle(theme)

  return (
    <Stack className={userListStyle.usersContainer}>
      {props.users?.map((user: GitHubUser, index: number) => (
        <div key={index} className={userListStyle.userContainer}>
          <Image
            src={user.avatarUrl}
            alt="Example with no image fit value and height or width is specified."
            width={50}
            height={50}
          />
          <Text variant="large" nowrap block>
            {user.login}
          </Text>
        </div>
      ))}
    </Stack>
  )
}
