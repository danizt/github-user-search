import { useTheme } from '@fluentui/react'
import { useEffect, useState } from 'react'
import { getUserData } from '../../services/gitHubService'
import { GitHubUserDetails } from '../../types'
import { UserDetailsStyle } from './userDetails.jss'

interface IUserDetailProps {
  userUrl: string | undefined
}

export const UserDetails = (props: IUserDetailProps) => {
  const theme = useTheme() as any
  const userDetailsStyle = UserDetailsStyle(theme)
  const [userData, setUserData] = useState<GitHubUserDetails>()

  useEffect(() => {
    if (props.userUrl && !userData) {
      getUserData(props.userUrl)
        .then((user: GitHubUserDetails) => setUserData(user))
        .catch((err) => console.log(err))
    }
  })
  return (
    <>
      <div className={userDetailsStyle.body}>
        <p>Nombre: {userData?.name}</p>
        <p>Twitter: {userData?.twitterUsername}</p>
        <p>Email: {userData?.email}</p>
      </div>
    </>
  )
}
