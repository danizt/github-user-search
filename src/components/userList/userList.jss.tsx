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
    },

    '&:hover > div': {
      transition: '0.5s',
      transform: 'translateY(-10px)',
    },
  },
  imageContainer: {
    flex: '1 1 30%',
    display: 'flex',
  },
  loginContainer: {
    flex: '1 1 70%',
    display: 'flex',
  },
  userImage: {
    borderRadius: theme.borders.radius50,
  },
  userLogin: {
    padding: theme.paddings.padding10,
    maxWidth: '140px',
  },
}))
