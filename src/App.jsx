import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { MainLayout } from "./layout/main-layout.jsx";
import { Auth } from "./pages/auth.jsx";

function App() {
  return (
    <>
     <Routes>
 
      <Route path="/auth" element={<Auth />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
