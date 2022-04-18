import { useEffect, useState } from 'react'
import { getUserData } from '../../services/gitHubService'
import { GitHubUserDetails } from '../../types'
import { UserDetailsStyle } from './userDetails.jss'
import { Image, useTheme } from '@fluentui/react'

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
        <div className={userDetailsStyle.userContainer}>
          <div className={userDetailsStyle.imageContainer}>
            <Image
              src={userData?.avatarUrl}
              alt="userImage"
              width={50}
              height={50}
              className={userDetailsStyle.userImage}
            />
          </div>
          <div className={userDetailsStyle.loginContainer}>
            <span>{userData?.name}</span>
            <span>{userData?.location}</span>
          </div>
          <div className={userDetailsStyle.bioContainer}>
            <span>{userData?.bio}</span>
          </div>
        </div>

        <div className={userDetailsStyle.contentContainer}>
          <span>Compañía: {userData?.company}</span>
          <span>Blog: {userData?.blog}</span>
          <span>Email: {userData?.email}</span>

          <span>Twitter: {userData?.twitterUsername}</span>
          <span>
            Enlace Twitter: https://twitter.com/{userData?.twitterUsername}
          </span>

          <span>Repositorios públicos: {userData?.publicRepos}</span>
          <span>
            Enlace repos públicos: {userData?.htmlUrl}?tab=repositories
          </span>

          <span>Siguiendo: {userData?.following}</span>
          <span>Enlace siguiendo: {userData?.htmlUrl}?tab=following</span>

          <span>Seguidores: {userData?.followers}</span>
          <span>Enlace seguidores: {userData?.htmlUrl}?tab=followers</span>

          <span>Fecha de registro: {userData?.createdAt}</span>

          <span>Enlace perfil: {userData?.htmlUrl}</span>
        </div>
      </div>
    </>
  )
}
