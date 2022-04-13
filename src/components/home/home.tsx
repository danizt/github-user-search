import { HomeStyle } from './home.jss'
import { useTheme } from 'react-jss'
import { SearchUsers } from './searchUsers/searchUsers'

export const Home = () => {
  const theme = useTheme() as any
  const homeStyle = HomeStyle(theme)

  return (
    <>
      <div className="App">
        {/* Header */}

        {/* Content */}
        <h1 className={homeStyle.titleContainer}>
          Buscador de usuarios en GitHub
        </h1>
        <div className={homeStyle.contentContainer}>
          <SearchUsers />
        </div>

        {/* Footer */}
      </div>
    </>
  )
}
