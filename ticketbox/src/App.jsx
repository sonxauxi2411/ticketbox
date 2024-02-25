import {Routes , Route} from 'react-router-dom'
import LoginPage from './components/auth/LoginPage';
import Home from './components/home/Home';
import Event from './components/event/Event';
import GlobalLoading from './components/common/GlobalLoading';


function App() {
  return (
    <>
      <GlobalLoading  />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/login' element ={<LoginPage />} />
        <Route path='/:eventId' element= {<Event />} />
      </Routes>
    </>
  );
}

export default App;
