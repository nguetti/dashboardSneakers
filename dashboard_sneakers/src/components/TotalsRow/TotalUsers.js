import './TotalsRow.css'
import { useEffect, useState } from "react";


function TotalUsers () {

    const [totalUsers, setTotalUsers] = useState([]);
    useEffect(() => {
    //   console.log("%cse monto el componente", "color: green");
      fetch("/api/users")
        .then((result) => result.json())
        .then((data) => {
          setTotalUsers(data.total);
        });
    }, []);
    
    useEffect(() => {
    //   console.log("%cse actualizo el componente", "color: blue");
    }, [totalUsers]);
    
    useEffect(() => {
      return () => console.log("%cse desmonto el componente", "color: red");
    });



    return (
<div className="m-2 totalsBox" >
    <p className="title">Total de usuarios</p>
    <p className="total">{totalUsers}</p>
</div>
    )
}
export default TotalUsers;