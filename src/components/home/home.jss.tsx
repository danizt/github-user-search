import { createUseStyles } from 'react-jss'

export const HomeStyle = createUseStyles((theme: any) => ({
  app: {
    height: '100%',
    backgroundImage: 'url(./src/assets/wallpaper.svg)',
  },
  titleContainer: {
    color: theme.colors.h1Foreground,
    textAlign: 'center',
    marginTop: 0,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: theme.paddings.padding20,
  },
}))
