import TotalProducts from "./TotalProducts";
import TotalUsers from "./TotalUsers";
import TotalBrands from "./TotalBrands";
import "./TotalsRow.css";
import Stack from 'react-bootstrap/Stack'


function TotalsRow() {
  return (
    <div className="p-0 col-10 col-sm-4 col-md-3 col-lg-2 align-items-center">
      

      <TotalProducts />
    
      <TotalUsers />
    
      <TotalBrands />
   
      
    </div>
  );
}
export default TotalsRow;
