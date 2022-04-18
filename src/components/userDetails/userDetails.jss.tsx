import { createUseStyles } from 'react-jss'

export const UserDetailsStyle = createUseStyles((theme: any) => ({
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: theme.fonts.CascadiaRegular,
  },
  root: {
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',

    margin: theme.margins.margin10,
    padding: theme.paddings.padding10,
    width: theme.widths.width250px,

    background: theme.colors.background,
    backdropFilter: 'blur(10px)',
    borderRadius: theme.borders.radius15px,
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1 1 78%',
    alignItems: 'center',
    textAlign: 'center',

    '& span:first-child': {
      fontWeight: 'bolder',
      padding: theme.paddings.padding10,
      fontSize: theme.fonts.subTitle,
    },
  },
  imageContainer: {
    flex: '1 1 20%',
    display: 'flex',
  },
  userImage: {
    borderRadius: theme.borders.radius50,
  },
  bioContainer: {
    padding: theme.paddings.padding10,
    margin: theme.margins.margin10,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: theme.margins.margin20,
  },
}))
