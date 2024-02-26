import { Routes, Route } from "react-router-dom";
import Organizational from "./components/page/Organizational";
import MainLayout from "./components/layout/MainLayout";
import "./index.scss";
import CreateOrg from "./components/page/CreateOrg";
import GlobalLoading from "./components/common/GlobaLoading";

function App() {
  return (
    <>
      <MainLayout>
        <GlobalLoading />
        <Routes>
          <Route path="/organization" element={<Organizational />} />
          <Route path="/organization/create" element={<CreateOrg />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
