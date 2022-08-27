import './MidRow.css'


function LastUser () {
    return (
<div className="lastUser-box" >
    <div className="lastUser-top">
        <p className="lastUser-title">Último usuario registrado</p>
    </div>
    <div className="lastUser-boxContent">
        <img src="" alt="Imagen de último usuario"/>
        <p className="lastUser-name">NOMBRE ULTIMO USUARIO</p>
        <div className="lastUser-bottom">Visitá tu perfil</div>
    </div>

</div>
    )
}
export default LastUser;