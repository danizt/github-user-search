import { createUseStyles } from "react-jss"

export const HomeStyle = createUseStyles((theme: any) => ({
  titleContainer: {
    color: theme.colors.h1Foreground,
    textAlign: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: theme.paddings.padding20,
  },
}))
