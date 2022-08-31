import "./MidRow.css";
import Table from 'react-bootstrap/Table'

function Brand() {
  return (
    <div className="brand-box">
      <div className="brand-top">
        <p className="brand-title">Último usuario registrado</p>
      </div>
      <Table striped hover>
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
export default Brand;
