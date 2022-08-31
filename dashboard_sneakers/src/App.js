import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Brands from "./components/MidRow/Brands";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar/Navbar";
import TotalProducts from './components/TotalProducts/TotalProducts'
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Footer from "./components/Footer";

function App() {
  return (
   
    <Container  className="d-flex flex-column min-vh-100 " fluid >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>  
        <Route path="/products" element={<TotalProducts/>} />
        <Route path="/brands"  element={<Brands/>} />
        <Route path="/users"  element={<Users/>} />
        <Route path="/userDetail/:id"  element={<UserDetail/>} />
      </Routes>
      <Footer />
    </Container>
      
  );
}

export default App;
