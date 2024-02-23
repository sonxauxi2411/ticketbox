import {Routes , Route} from 'react-router-dom'
import LoginPage from './components/auth/LoginPage';
import Home from './components/home/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/login' element ={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
