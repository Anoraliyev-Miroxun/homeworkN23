import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { MainLayout } from "./layout/main-layout.jsx";
import { Auth } from "./pages/auth.jsx";
import { Profile } from "./pages/profile.jsx";
import { Contact } from './pages/contact.jsx';

function App() {
  return (

    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/home/about" element={<Profile />} />
        <Route path="/home/contact" element={<Contact />} />
      </Route>
    </Routes>

  );
}

export default App;
