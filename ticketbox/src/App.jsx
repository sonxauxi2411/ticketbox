import {Routes , Route} from 'react-router-dom'
import LoginPage from './components/auth/LoginPage';
import Home from './components/home/Home';
import Event from './components/event/Event';
import GlobalLoading from './components/common/GlobalLoading';
import EventList from './components/event/EventList';
import CategoryPage from './components/category/CategoryPage';
import PageWrapper from './components/common/PageWrapper';


function App() {
  return (
    <>
     
      <Routes>
        <Route path='/'  element={<>
          <GlobalLoading  />
          <Home />
        </>} />
        <Route path='/login' element ={<LoginPage />} />
        <Route path='/event' element ={<CategoryPage />} />
        <Route path='/event/:eventId' element= {<PageWrapper>
          <GlobalLoading  />
          <Event />
        </PageWrapper>} />
      </Routes>
    </>
  );
}

export default App;
