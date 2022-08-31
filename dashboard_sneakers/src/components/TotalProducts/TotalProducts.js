import "./TotalProducts.css";
import Table from 'react-bootstrap/Table';

function TotalProducts() {
  return (
    <div className="col-12 container-TotalProducts p-0">
      <div className="TotalProductsTop">Todos los Productos</div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>      
    </div>
  );
}
export default TotalProducts;
