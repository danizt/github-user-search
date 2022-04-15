import { useTheme } from '@fluentui/react'
import { UserDetailsStyle } from './userDetails.jss'

interface IUserDetailProps {
  userUrl: string | undefined
}

export const UserDetails = (props: IUserDetailProps) => {
  const theme = useTheme() as any
  const userDetailsStyle = UserDetailsStyle(theme)

  return (
    <>
      <div className={userDetailsStyle.body}>
        <p>{props.userUrl}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          lorem nulla, malesuada ut sagittis sit amet, vulputate in leo.
          Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis.
          Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin
          dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac
          habitasse platea dictumst. In a odio eget enim porttitor maximus.
          Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui.
          Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus
          ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et
          volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies
          mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend
          efficitur.
        </p>
      </div>
    </>
  )
}
