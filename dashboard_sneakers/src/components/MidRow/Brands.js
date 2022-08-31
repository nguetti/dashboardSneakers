import "./MidRow.css";
import Table from 'react-bootstrap/Table'
import {useState, useEffect} from 'react'

function Brand() {

  const [totalBrands, settotalBrands] = useState([]);
  useEffect(() => {
    console.log("%cse monto el componente", "color: green");
    fetch("/api/products")
      .then((result) => result.json())
      .then((data) => {
        settotalBrands(data.countByBrand);
      });
  }, []);
  
  useEffect(() => {
    console.log("%cse actualizo el componente", "color: blue");
  }, [totalBrands]);
  
  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <div className="brand-box">
      <div className="brand-top">
        <p className="brand-title">Marcas</p>
      </div>
      <Table striped hover>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      {totalBrands.map (brands  => {
        // console.log(Object.keys(brands))
        // console.log(Object.values(brands))
        return(
       <tbody>
        <tr>
         <td>{Object.keys(brands)}</td>
         <td>{Object.values(brands)}</td>
        </tr>
        </tbody>
)
      })
     
}
    
    </Table>   
    </div>
  );
}
export default Brand;
