import "./App.css";
import MidRow from "./components/MidRow/MidRow";
import Navbar from "./components/Navbar/Navbar";
import TotalsRow from "./components/TotalsRow/TotalsRow";
import DetailRow from "./components/DetailRow/DetailRow";
import TotalProducts from "./components/TotalProducts/TotalProducts";

function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <TotalsRow />
        <MidRow />
        <DetailRow />
      </div>
<div className="mainContainerBottom">
  <TotalProducts />
  
  </div>
      
    </>
  );
}

export default App;
