import { HomeStyle } from "./home.jss"
import { SearchBox } from "@fluentui/react/lib/SearchBox"
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack"

export const Home = () => {
  const homeStyle = HomeStyle()
  const stackTokens: Partial<IStackTokens> = { childrenGap: 20 }

  return (
    <>
      <div className="App">
        {/* Header */}
        <p className={homeStyle.titleContainer}>Hello world!</p>
        {/* Content */}
        <Stack tokens={stackTokens}>
          <SearchBox
            placeholder="Search"
            onSearch={(newValue) => console.log("value is " + newValue)}
          />
        </Stack>
        {/* Footer */}
      </div>
    </>
  )
}
