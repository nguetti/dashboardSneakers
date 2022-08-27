import './Navbar.css';


function Navbar() {
  return (
    <nav className='nav'>
      <div className="nav-container">
        <div className="nav-image">
          <img src="/img/LogoBlanco.png" alt='element' style={{width: "150px"}}/>
        </div>
        <div className="nav-element">
          <img src="/img/dashboard.png" alt='element' style={{width: "20px"}}/>
          <p>Dashboard</p>
        </div>
        <div className="nav-element">
          <img src="/img/zapatilla.png" alt='element' style={{width: "20px"}}/>
          <p>Productos</p>
        </div>
        <div className="nav-element">
          <img src="/img/rocket.png" alt='element' style={{width: "20px"}}/>
          <p>Marcas</p>
        </div>
        <div className="nav-element">
          <img src="/img/persona.png" alt='element' style={{width: "20px"}}/>
          <p>Usuarios</p>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
