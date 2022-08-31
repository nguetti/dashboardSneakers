import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MidRow from "./MidRow/MidRow";
import TotalsRow from "./TotalsRow/TotalsRow";
import DetailRow from "./DetailRow/DetailRow";
import TotalProducts from "./TotalProducts/TotalProducts";

function Home() {
  return (
    <>
      <div className="row m-2 justify-content-center align-items-center h-100">
        <TotalsRow />
        <MidRow />
        <DetailRow />
      </div>
      <div className="row m-2">
        <TotalProducts />
      </div>
    </>
  );
}

export default Home;
