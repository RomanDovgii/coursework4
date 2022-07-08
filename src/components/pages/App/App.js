import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AppRoute } from "../../../utils/constants";
import NavigationItemBlock from "../../blocks/navigation-item-block/navigation-item-block";
import Footer from "../../styled-blocks/basic-parts/footer/footer";
import Header from "../../styled-blocks/basic-parts/header/header";
import Main from "../../styled-blocks/basic-parts/main/main";
import NavigationHeader from "../../styled-blocks/navigation-parts/navigation-header/navigation-header";
import Wrapper from "../../styled-blocks/wrapper/wrapper";
import MainPage from "../main/main-page";
import WorkPage from "../work/work-page";
import WorksPage from "../works/works-page";
import { AppBar } from "@mui/material";
import UploadPage from "../upload/upload-page";


function App() {
  return (
    <BrowserRouter>
      <AppBar>
        <Wrapper display="flex" align="center">
          <NavigationHeader>
            {
              Object.keys(AppRoute).map((key, index) => {
                if (key === "WORK") {
                  // eslint-disable-next-line array-callback-return
                  return;
                }
                return <NavigationItemBlock text={key} link={key === "WORKS" ? `/works/1` : AppRoute[key]} key={key+index}/>
              })
            }
          </NavigationHeader>
        </Wrapper>
      </AppBar>
      <Main>
        <Routes>
          <Route 
            path={AppRoute.MAIN}
            element={<MainPage/>}
          >
          </Route>
          <Route 
            path={AppRoute.WORKS}
            element={<WorksPage/>}
          >
          </Route>
          <Route 
            path={AppRoute.WORK+`:id`}
            element={<WorkPage/>}
          >
          </Route>
          <Route 
            path={AppRoute.UPLOAD}
            element={<UploadPage/>}
          >
          </Route>
        </Routes>
      </Main>
      <Footer>
        <Wrapper></Wrapper>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
