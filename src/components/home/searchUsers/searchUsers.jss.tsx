import { createUseStyles } from "react-jss"

export const SearchUsersStyle = createUseStyles((theme: any) => ({
  searchUsersContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",

    maxWidth: theme.widths.width50,
    width: theme.widths.width800px,
    padding: theme.paddings.padding10,
    borderRadius: theme.borders.radius20,
    boxShadow: "0 5px 20px " + theme.colors.cardShadow,
  },
  searchBox: {
    width: theme.widths.width100,
  },
  searchUsersButton: {
    width: theme.widths.width100px,
  },
}))
