import { SearchUsersStyle } from "./searchUsers.jss"
import { useTheme } from "react-jss"
import { SearchBox } from "@fluentui/react/lib/SearchBox"
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack"
import { DefaultButton } from "@fluentui/react"

export const SearchUsers = () => {
  const theme = useTheme() as any
  const searchUsersStyle = SearchUsersStyle(theme)
  const stackTokens: Partial<IStackTokens> = {}

  return (
    <>
      <Stack
        tokens={stackTokens}
        className={searchUsersStyle.searchUsersContainer}
      >
        <SearchBox
          placeholder="Search"
          onSearch={(newValue) => console.log("value is " + newValue)}
          className={searchUsersStyle.searchBox}
        />
        <DefaultButton
          text="Search"
          onClick={() => console.log("value is ")}
          allowDisabledFocus
          className={searchUsersStyle.searchUsersButton}
        />
      </Stack>
    </>
  )
}
