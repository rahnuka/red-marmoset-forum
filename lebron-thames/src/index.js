import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./pages/Forum";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Footer from "./globalcomp/Footer"
import Navbar from "./globalcomp/BarHeader"

export default function Index() {
  return (
    <BrowserRouter>

      <Navbar/>

      
      <Routes>
        <Route>
          <Route path="/" element={<Forum/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>

      <Footer/>

      
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);