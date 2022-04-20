import { createUseStyles } from 'react-jss'
import HomeBackground from './../../assets/background.svg'

export const HomeStyle = createUseStyles((theme: any) => ({
  app: {
    minHeight: '100%',
    backgroundImage: `url(${HomeBackground})`,
  },
  titleContainer: {
    color: theme.colors.h1Foreground,
    textAlign: 'center',
    marginTop: 0,
    paddingTop: theme.paddings.padding20,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: theme.paddings.padding20,
  },
}))
