import { Routes, Route } from "react-router-dom";
import Organizational from "./components/page/Organizational";
import MainLayout from "./components/layout/MainLayout";
import "./index.scss";
import CreateOrg from "./components/page/CreateOrg";
import GlobalLoading from "./components/common/GlobaLoading";
import LoginPage from "./components/auth/LoginPage";
import { privateRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <GlobalLoading />
      <Routes>
        {privateRoutes.map((router, index) => {
          const Page = router.component;

          return (
            <Route
              key={index}
              path={router.path}
              element={
                <MainLayout>
                  <Page />
                </MainLayout>
              }
            />
          );
        })}
       <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
