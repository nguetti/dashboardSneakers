import "./App.css";
import MidRow from "./components/MidRow/MidRow";
import Navbar from "./components/Navbar/Navbar";
import TotalsRow from "./components/TotalsRow/TotalsRow";

function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <TotalsRow />
        <MidRow />
      </div>
    </>
  );
}

export default App;
