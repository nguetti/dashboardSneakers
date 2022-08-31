import './MidRow.css'
import {useState, useEffect} from 'react';

function LastUser () {
    const [lastUser, setLastUser] = useState([]);
    useEffect(() => {
      console.log("%cse monto el componente", "color: green");
      fetch("/api/users")
        .then((result) => result.json())
        .then((data) => {
          setLastUser(data.data[data.data.length -1]);
          console.log(data.data)
   
        });
    }, []);
    
    useEffect(() => {
      console.log("%cse actualizo el componente", "color: blue");
    }, [lastUser]);
    
   
    useEffect(() => {
      return () => console.log("%cse desmonto el componente", "color: red");
    });

    return (

<div className='lastUser-box'>
<div className="lastUser-top">
        <p className="lastUser-title">Último usuario registrado</p>
    </div>
    <div className="lastUser-boxContent">
        <img src="/img/avatardefault.png" alt="Imagen de último usuario" style={{width: "25%"}}/>
        <p className="lastUser-name">{lastUser.first_name}</p>
        <div className="lastUser-bottom">Visitá su perfil</div>
    </div>
</div>
    )
}
export default LastUser;