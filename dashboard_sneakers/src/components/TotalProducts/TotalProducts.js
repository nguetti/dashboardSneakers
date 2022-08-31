import "./TotalProducts.css";
import Table from 'react-bootstrap/Table';
import {useState, useEffect} from 'react';

function TotalProducts() {

  const [totalProducts, settotalProducts] = useState([]);
  useEffect(() => {
    console.log("%cse monto el componente", "color: green");
    fetch("/api/products")
      .then((result) => result.json())
      .then((data) => {
        settotalProducts(data.products);
      });
  }, []);
  
  useEffect(() => {
    console.log("%cse actualizo el componente", "color: blue");
  }, [totalProducts]);
  
  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <div className="col-12 container-TotalProducts p-0">
      <div className="TotalProductsTop">Todos los Productos</div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descuento</th>
        </tr>
      </thead>

      {totalProducts.map (products  => {
        // console.log(Object.keys(brands))
        // console.log(Object.values(brands))
        return(
       <tbody>
        <tr>
         <td>{products.id}</td>
         <td>{products.name}</td>
         <td>{products.price}</td>
         <td>{products.discount}</td>
        </tr>
        </tbody>
)
      })
     
}
    </Table>      
    </div>
  );
}
export default TotalProducts;
