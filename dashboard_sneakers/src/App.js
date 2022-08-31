import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MidRow from "./components/MidRow/MidRow";
import Brands from './components/MidRow/Brands'
import NavBar from "./components/Navbar/Navbar";
import TotalsRow from "./components/TotalsRow/TotalsRow";
import DetailRow from "./components/DetailRow/DetailRow";
import TotalProducts from "./components/TotalProducts/TotalProducts";
import Container from "react-bootstrap/Container";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container fluid>
      <NavBar />
      <div className="row m-2 justify-content-center align-items-center h-100">
        <TotalsRow />
        <MidRow />
        <DetailRow />
      </div>
      <div className="row m-2">
        <TotalProducts />
      </div>

      <Routes>
    <Route path="/" exact={true} component={App}/>
    <Route path="/products" exact={true} component={TotalProducts} />
    
    <Route path="/brands" exact={true} component={Brands}/>
  </Routes>;
    </Container>
  );
}

export default App;
