import {Routes , Route} from 'react-router-dom'
import Organizational from './components/page/Organizational';



function App() {
  return (
    <>
      <Routes>
          <Route path ='/org' element={<Organizational />} />
      </Routes>
    </>
  );
}

export default App;
