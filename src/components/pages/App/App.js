import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AppRoute } from "../../../utils/constants";
import NavigationItemBlock from "../../blocks/navigation-item-block/navigation-item-block";
import Footer from "../../styled-blocks/basic-parts/footer/footer";
import Header from "../../styled-blocks/basic-parts/header/header";
import NavigationHeader from "../../styled-blocks/navigation-parts/navigation-header/navigation-header";
import Wrapper from "../../styled-blocks/wrapper/wrapper";


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Wrapper display="flex" align="center">
          <NavigationHeader>
            {
              Object.keys(AppRoute).map((key, index) => {
                if (key !== "WORK") {
                  return <NavigationItemBlock text={key} link={key} key={key+index}/>
                }
              })
            }
          </NavigationHeader>
        </Wrapper>
      </Header>
      <Routes>
        <Route path={AppRoute.MAIN}>
        </Route>
        <Route path={AppRoute.WORKS}>
          
        </Route>
        <Route path={AppRoute.WORK}>
          
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
