import { HomeStyle } from "./home.jss"
import { useTheme } from "react-jss"
import { SearchBox } from "@fluentui/react/lib/SearchBox"
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack"
import { DefaultButton } from "@fluentui/react"

export const Home = () => {
  const theme = useTheme() as any
  const homeStyle = HomeStyle(theme)
  const stackTokens: Partial<IStackTokens> = {}

  return (
    <>
      <div className="App">
        {/* Header */}

        {/* Content */}
        <h1 className={homeStyle.titleContainer}>
          Buscador de usuarios en GitHub
        </h1>
        <div className={homeStyle.contentContainer}>
          <Stack tokens={stackTokens} className={homeStyle.searchContainer}>
            <SearchBox
              placeholder="Search"
              onSearch={(newValue) => console.log("value is " + newValue)}
            />
            <DefaultButton
              text="Search"
              onClick={() => console.log("value is ")}
              allowDisabledFocus
              className={homeStyle.searchButton}
            />
          </Stack>
        </div>

        {/* Footer */}
      </div>
    </>
  )
}
