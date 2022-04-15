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
import { GitHubUser } from '../../types'
import { UserDetails } from '../userDetails/userDetails'
import { useState } from 'react'

interface IUserListProps {
  users: GitHubUser[]
}

export const UserList = (props: IUserListProps) => {
  const theme = useTheme() as any
  const userListStyle = UserListStyle(theme)

  const [userUrl, setUserUrl] = useState<string>()

  const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
      // color: theme.palette.neutralPrimary,
      marginLeft: 'auto',
      marginTop: '4px',
      marginRight: '2px',
    },
    rootHovered: {
      // color: theme.palette.neutralDark,
    },
  }
  const cancelIcon: IIconProps = { iconName: 'Cancel' }

  return (
    <div className={userListStyle.usersContainer}>
      {props.users?.map((user: GitHubUser, index: number) => (
        <div
          key={index}
          className={userListStyle.userContainer}
          onClick={() => setUserUrl(user.url)}
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
      <Modal
        titleAriaId="TODO"
        isOpen={!!userUrl}
        isBlocking={false}
        containerClassName={userListStyle.container}
      >
        <div className={userListStyle.header}>
          <span id="TODO">{userUrl}</span>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={() => setUserUrl(undefined)}
          />
        </div>
        <UserDetails userUrl={userUrl} />
      </Modal>
    </div>
  )
}
