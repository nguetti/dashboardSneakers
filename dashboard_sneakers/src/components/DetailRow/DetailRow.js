import "./DetailRow.css";

function DetailRow() {
  return (
    <div className="container-DetailRow">
      <div className="DetailRowTop">Ultimo Producto Agregado</div>
      <img src="/img/18.jpeg" style={{width:'400px'}}/>
      <hr/>
      <div className="DetailRowContent">
      <p className="DetailRow">Nombre Producto</p>
      <p className="DetailRowPrecio">Precio</p>
      </div>

      <p>Descripcion</p>
      
    
    </div>
  );
}
export default DetailRow;
