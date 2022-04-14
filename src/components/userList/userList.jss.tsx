import { createUseStyles } from 'react-jss'

export const UserListStyle = createUseStyles((theme: any) => ({
  usersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    margin: theme.margins.margin20,
    // padding: theme.paddings.padding10,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    margin: theme.margins.margin10,
    padding: theme.paddings.padding10,
    // border: theme.borders.test,
    width: theme.widths.width250px,
    height: theme.heights.height80px,

    background: theme.colors.background,
    boxShadow: '0 15px 35px ' + theme.colors.cardShadow,
    backdropFilter: 'blur(10px)',
    borderRadius: theme.borders.radius15px,

    '&:hover': {
      cursor: 'pointer',
      transition: '0.6s',
      transform: 'translateY(-10px)',
    },
  },
  imageContainer: {
    flex: '1 1 16%',
    display: 'flex',
  },
  loginContainer: {
    flex: '1 1 84%',
    display: 'flex',
  },
  userImage: {
    borderRadius: theme.borders.radius50,
  },
  userLogin: {
    padding: theme.paddings.padding10,
    maxWidth: '150px',
    color: theme.colors.text,
    fontFamily: theme.fonts.CascadiaRegular,
  },
  // Modal
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    // theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      // borderTop: `4px solid ${theme.palette.themePrimary}`,
      // color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
  root: {
    // color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    // color: theme.palette.neutralDark,
  },
}))
