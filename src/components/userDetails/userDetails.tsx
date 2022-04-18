import { useEffect, useState } from 'react'
import { getUserData } from '../../services/gitHubService'
import { GitHubUserDetails } from '../../types'
import { UserDetailsStyle } from './userDetails.jss'
import { FontIcon, Image, useTheme } from '@fluentui/react'
import moment from 'moment'

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
            <span>
              <FontIcon iconName="Pinned" /> {userData?.location}
            </span>
          </div>
          <div className={userDetailsStyle.bioContainer}>
            <span>{userData?.bio}</span>
          </div>
        </div>

        <div className={userDetailsStyle.contentContainer}>
          <div className={userDetailsStyle.sectionContainer}>
            <span>
              <FontIcon iconName="UserEvent" /> {userData?.login}
            </span>
            <span>
              <FontIcon iconName="Home" /> {userData?.company}
            </span>
            <span>
              <FontIcon iconName="DietPlanNotebook" />{' '}
              <a href={userData?.blog}>{userData?.blog}</a>
            </span>
            <span>{userData?.email}</span>

            <span>
              <FontIcon iconName="Commitments" />{' '}
              <a href={`https://twitter.com/${userData?.twitterUsername}`}>
                {userData?.twitterUsername}
              </a>
            </span>
          </div>

          <div className={userDetailsStyle.sectionContainer}>
            <span>
              Siguiendo:{' '}
              <a href={userData?.htmlUrl + '?tab=following'}>
                {userData?.following}
              </a>
            </span>

            <span>
              Seguidores:{' '}
              <a href={userData?.htmlUrl + '?tab=followers'}>
                {userData?.followers}
              </a>
            </span>

            <span>
              Repositorios públicos:{' '}
              <a href={userData?.htmlUrl + '?tab=repositories'}>
                {userData?.publicRepos}
              </a>
            </span>
            <span>
              Fecha de registro:{' '}
              {moment(userData?.createdAt, 'YYYY-MM-DD').format('DD/MM/YYYY')}
            </span>
          </div>
        </div>
        <span>Enlace perfil: {userData?.htmlUrl}</span>
      </div>
    </>
  )
}
