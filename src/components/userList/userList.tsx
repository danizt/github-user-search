import { useTheme } from 'react-jss'
import { UserListStyle } from './userList.jss'
import {
  IButtonStyles,
  IconButton,
  IIconProps,
  Image,
  Modal,
  Text,
} from '@fluentui/react'
import { GitHubUser, SelectedUser } from '../../types'
import { UserDetails } from '../userDetails/userDetails'
import { useState } from 'react'

interface IUserListProps {
  users: GitHubUser[]
}

export const UserList = (props: IUserListProps) => {
  const theme = useTheme() as any
  const userListStyle = UserListStyle(theme)

  const [selectedUser, setUserUrl] = useState<SelectedUser>()

  const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
      marginLeft: 'auto',
      marginTop: '4px',
      marginRight: '2px',
    },
    rootHovered: {
      background: theme.colors.background,
    },
  }
  const cancelIcon: IIconProps = { iconName: 'Cancel' }

  return (
    <>
      <div className={userListStyle.usersContainer}>
        {props.users?.map((user: GitHubUser, index: number) => (
          <div
            key={index}
            className={userListStyle.userContainer}
            onClick={() => setUserUrl({ login: user.login, url: user.url })}
          >
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
      <Modal
        titleAriaId="TODO"
        isOpen={!!selectedUser}
        isBlocking={false}
        containerClassName={userListStyle.modalContainer}
      >
        <div className={userListStyle.modalHeader}>
          <span> </span>
          <span id="TODO">{selectedUser?.login}</span>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={() => setUserUrl(undefined)}
          />
        </div>
        <UserDetails userUrl={selectedUser?.url} />
      </Modal>
    </>
  )
}
