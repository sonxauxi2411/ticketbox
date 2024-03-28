import {Routes , Route} from 'react-router-dom'
import LoginPage from './components/auth/LoginPage';
import Home from './components/home/Home';
import Event from './components/event/Event';
import GlobalLoading from './components/common/GlobalLoading';
import EventList from './components/event/EventList';
import CategoryPage from './components/category/CategoryPage';
import PageWrapper from './components/common/PageWrapper';
import BookingPage from './components/booking/BookingPage';
import RegisterPage from './components/auth/RegisterPage';
import MyTicket from './components/ticket/MyTicket';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './components/header/UserProfile';

function App() {

  return (
    <>
      <div>

        <ToastContainer />
      </div>
      <Routes>
        <Route path='/'  element={<>
         <PageWrapper path='/' >
         <GlobalLoading  />
          <Home />
         </PageWrapper>
        </>} />
        <Route path='/login' element ={<LoginPage />} />
        <Route path='/register' element ={<RegisterPage />} />
        <Route path='/event' element ={
        <PageWrapper path='/event'>
          <GlobalLoading   />
          <CategoryPage />
        </PageWrapper>
        
        } />
        <Route path='/event/:eventId' element= {<PageWrapper path='/event/:eventId'>
          <GlobalLoading  />
          <Event />
        </PageWrapper>} />

        <Route path='/booking/:eventId' element= {<PageWrapper path='/booking/:eventId'>
          <GlobalLoading  />
          <BookingPage />
        </PageWrapper>} />

        <Route path ='/my-ticket' element ={
          <PageWrapper path ='/my-ticket'>
            <GlobalLoading  />
            <MyTicket />
          </PageWrapper>
        } />

    <Route path ='/profile' element ={
          <PageWrapper path ='/profile'>
            <GlobalLoading  />
            <UserProfile />
          </PageWrapper>
        } />
      </Routes>
    </>
  );
}

export default App;
