import { useState, useEffect } from "react";
import Table from "react-bootstrap/esm/Table";

function Users() {
  const [totalUsers, settotalUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((result) => result.json())
      .then((data) => {
        settotalUsers(data.data);
        console.log(data.data);
      });
  }, []);

  useEffect(() => {}, [totalUsers]);

  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <div className="lastUser-box">
      <div className="lastUser-top">
        <p className="lastUser-title">Todos nuestros usuarios</p>
      </div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
        </tr>
      </thead>

      {totalUsers.map (users  => {
        // console.log(Object.keys(brands))
        // console.log(Object.values(brands))
        return(
       <tbody>
        <tr>
         <td>{users.first_name}</td>
         <td>{users.last_name}</td>
         <td>{users.email}</td>
        </tr>
        </tbody>
)
      })
     
}
    </Table>      
    </div>
  );
}
export default Users;
