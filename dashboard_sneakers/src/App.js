import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MidRow from "./components/MidRow/MidRow";
import NavBar from "./components/Navbar/Navbar";
import TotalsRow from "./components/TotalsRow/TotalsRow";
import DetailRow from "./components/DetailRow/DetailRow";
import TotalProducts from "./components/TotalProducts/TotalProducts";
import Container from "react-bootstrap/Container";

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
    </Container>
  );
}

export default App;
