import { HomeStyle } from './home.jss';
 

export const Home = () => {
  const homeStyle = HomeStyle();

  return (
    <>
      <div className="App">
        <p className={homeStyle.titleContainer}>Hello world!</p>
      </div>
    </>
  )
}