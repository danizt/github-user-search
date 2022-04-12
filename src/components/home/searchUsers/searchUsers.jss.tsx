import { createUseStyles } from "react-jss"

export const SearchUsersStyle = createUseStyles((theme: any) => ({
  searchUsersContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",

    maxWidth: theme.widths.width50,
    border: theme.borders.test,
    width: theme.widths.width800px,
    padding: theme.paddings.padding20,
    borderRadius: theme.borders.radius20,
  },
  searchUsersButton: {
    width: theme.widths.width100px,
  },
}))
