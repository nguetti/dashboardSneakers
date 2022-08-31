import './MidRow.css'

function LastUser () {
    return (

<div className='lastUser-box'>
<div className="lastUser-top">
        <p className="lastUser-title">Último usuario registrado</p>
    </div>
    <div className="lastUser-boxContent">
        <img src="/img/avatardefault.png" alt="Imagen de último usuario" style={{width: "25%"}}/>
        <p className="lastUser-name">Juan Perez</p>
        <div className="lastUser-bottom">Visitá su perfil</div>
    </div>
</div>
    )
}
export default LastUser;