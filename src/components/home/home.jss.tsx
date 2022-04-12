import { createUseStyles } from "react-jss"

export const HomeStyle = createUseStyles((theme: any) => ({
  titleContainer: {
    color: theme.colors.h1Foreground,
    // fontFamily: theme.fonts.CascadiaCode,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: theme.paddings.padding20,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",

    maxWidth: theme.widths.width50,
    border: theme.borders.test,
    width: theme.widths.width800px,
    padding: theme.paddings.padding20,
    borderRadius: theme.borders.radius20,
  },
  searchButton: {
    width: theme.widths.width100px,
  },
}))
