import { HomeStyle } from "./home.jss"
import { SearchBox } from "@fluentui/react/lib/SearchBox"
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack"
import { useTheme } from "react-jss"

export const Home = () => {
  const theme = useTheme() as any
  const homeStyle = HomeStyle(theme)
  const stackTokens: Partial<IStackTokens> = { childrenGap: 20 }

  return (
    <>
      <div className="App">
        {/* Header */}

        {/* Content */}
        <h1 className={homeStyle.titleContainer}>
          Buscador de usuarios en GitHub
        </h1>
        <div>
          <Stack tokens={stackTokens}>
            <SearchBox
              placeholder="Search"
              onSearch={(newValue) => console.log("value is " + newValue)}
            />
          </Stack>
        </div>

        {/* Footer */}
      </div>
    </>
  )
}
