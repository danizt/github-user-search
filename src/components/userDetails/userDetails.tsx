import { useEffect, useState } from 'react'
import { getUserData } from '../../services/gitHubService'
import { GitHubUserDetails } from '../../types'
import { UserDetailsStyle } from './userDetails.jss'
import { FontIcon, Image, Link, useTheme } from '@fluentui/react'
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
            {userData?.location ? (
              <>
                <span>
                  <FontIcon iconName="Pinned" /> {userData?.location}
                </span>
              </>
            ) : null}
          </div>
          {userData?.bio ? (
            <>
              <div className={userDetailsStyle.bioContainer}>
                <span>{userData?.bio}</span>
              </div>
            </>
          ) : null}
        </div>
        <div className={userDetailsStyle.contentContainer}>
          <div className={userDetailsStyle.sectionContainer}>
            <span>
              <FontIcon iconName="UserEvent" /> {userData?.login}
            </span>
            {userData?.company ? (
              <>
                <span>
                  <FontIcon iconName="Home" /> {userData?.company}
                </span>
              </>
            ) : null}
            {userData?.blog ? (
              <>
                <span>
                  <FontIcon iconName="DietPlanNotebook" />{' '}
                  <Link href={userData?.blog} target="_blank">
                    {userData?.blog}
                  </Link>
                </span>
              </>
            ) : null}
            {userData?.email ? (
              <>
                <span>
                  <FontIcon iconName="Mail" /> {userData?.email}
                </span>
              </>
            ) : null}

            {userData?.twitterUsername ? (
              <>
                <span>
                  <FontIcon iconName="Commitments" />{' '}
                  <Link
                    href={`https://twitter.com/${userData?.twitterUsername}`}
                    target="_blank"
                  >
                    {userData?.twitterUsername}
                  </Link>
                </span>
              </>
            ) : null}
          </div>
          <div className={userDetailsStyle.sectionContainer}>
            <span>
              Siguiendo:{' '}
              <Link href={userData?.htmlUrl + '?tab=following'} target="_blank">
                {userData?.following}
              </Link>
            </span>
            <span>
              Seguidores:{' '}
              <Link href={userData?.htmlUrl + '?tab=followers'} target="_blank">
                {userData?.followers}
              </Link>
            </span>
            <span>
              Repositorios públicos:{' '}
              <Link
                href={userData?.htmlUrl + '?tab=repositories'}
                target="_blank"
              >
                {userData?.publicRepos}
              </Link>
            </span>
            <span>
              Fecha de registro:{' '}
              {moment(userData?.createdAt, 'YYYY-MM-DD').format('DD/MM/YYYY')}
            </span>
          </div>
        </div>
        <Link href={userData?.htmlUrl} target="_blank">
          <img
            src="https://img.shields.io/badge/-Github-000?style=flat&logo=Github&logoColor=white"
            alt="dzarzoso"
          />
        </Link>
      </div>
    </>
  )
}
