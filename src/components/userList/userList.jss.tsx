import { createUseStyles } from 'react-jss'

export const UserListStyle = createUseStyles((theme: any) => ({
  usersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    margin: theme.margins.margin20,
    padding: theme.paddings.padding10,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    margin: theme.margins.margin10,
    padding: theme.paddings.padding10,
    // border: theme.borders.test,
    width: theme.widths.width300px,
  },
}))
