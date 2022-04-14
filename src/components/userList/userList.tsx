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
import { useBoolean } from '@fluentui/react-hooks'

interface IUserListProps {
  users: GitHubUser[]
}

export const UserList = (props: IUserListProps) => {
  const theme = useTheme() as any
  const userListStyle = UserListStyle(theme)
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false)

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
          onClick={showModal}
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
        isOpen={isModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={userListStyle.container}
      >
        <div className={userListStyle.header}>
          <span id="TODO">Lorem Ipsum</span>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={hideModal}
          />
        </div>
        <div className={userListStyle.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lorem nulla, malesuada ut sagittis sit amet, vulputate in leo.
            Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis.
            Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin
            dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac
            habitasse platea dictumst. In a odio eget enim porttitor maximus.
            Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui.
            Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus
            ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit,
            et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies
            mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend
            efficitur.
          </p>
        </div>
      </Modal>
    </div>
  )
}
