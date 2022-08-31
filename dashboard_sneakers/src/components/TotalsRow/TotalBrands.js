import "./TotalsRow.css";
import { useEffect, useState } from "react";

function TotalBrands() {

    const [totalBrands, settotalBrands] = useState([]);
    useEffect(() => {
      console.log("%cse monto el componente", "color: green");
      fetch("/api/products")
        .then((result) => result.json())
        .then((data) => {
          settotalBrands(data.totalBrands);
        });
    }, []);
    
    useEffect(() => {
      console.log("%cse actualizo el componente", "color: blue");
    }, [totalBrands]);
    
    useEffect(() => {
      return () => console.log("%cse desmonto el componente", "color: red");
    });

  return (
    <div className="m-2 totalsBox">
      <p className="title">Total de marcas</p>
      <p className="total">{totalBrands}</p>
    </div>
  );
}
export default TotalBrands;
