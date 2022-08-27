import "./App.css";
import MidRow from "./components/MidRow/MidRow";
import Navbar from "./components/Navbar/Navbar";
import TotalsRow from "./components/TotalsRow/TotalsRow";
import DetailRow from "./components/DetailRow/DetailRow";

function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <TotalsRow />
        <MidRow />
        <DetailRow />
      </div>
    </>
  );
}

export default App;
