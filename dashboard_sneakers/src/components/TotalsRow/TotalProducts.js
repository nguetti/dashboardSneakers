import "./TotalsRow.css";
import { useEffect, useState } from "react";


function TotalProducts() {

    const [totalProducts, setTotalProducts] = useState([]);
    useEffect(() => {
    //   console.log("%cse monto el componente", "color: green");
      fetch("/api/products")
        .then((result) => result.json())
        .then((data) => {
          setTotalProducts(data.totalProducts);
        });
    }, []);
    
    useEffect(() => {
    //   console.log("%cse actualizo el componente", "color: blue");
    }, [totalProducts]);
    
    useEffect(() => {
      return () => console.log("%cse desmonto el componente", "color: red");
    });

  return (
    <div className="totalsBox">
      <p className="title">Total de productos</p>
      <p className="total">{totalProducts}</p>
    </div>
  );
}
export default TotalProducts;
