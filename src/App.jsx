
import {Route ,Routes} from 'react-router-dom';
import { MainLayout } from './layout/mainLayout';
import {Home} from './pages/home.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
