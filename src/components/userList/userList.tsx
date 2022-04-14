import { useTheme } from 'react-jss'
import { UserListStyle } from './userList.jss'
import { Image, Text } from '@fluentui/react'
import { GitHubUser } from '../../types'

interface IUserListProps {
  users: GitHubUser[]
}

export const UserList = (props: IUserListProps) => {
  const theme = useTheme() as any
  const userListStyle = UserListStyle(theme)

  return (
    <div className={userListStyle.usersContainer}>
      {props.users?.map((user: GitHubUser, index: number) => (
        <div key={index} className={userListStyle.userContainer}>
          <div className={userListStyle.imageContainer}>
            <Image
              src={user.avatarUrl}
              alt="userImage"
              width={50}
              height={50}
              className={userListStyle.userImage}
            />
          </div>
          <div className={userListStyle.loginContainer}>
            <Text
              variant="mediumPlus"
              nowrap
              block
              className={userListStyle.userLogin}
            >
              {user.login}
            </Text>
          </div>
        </div>
      ))}
    </div>
  )
}
