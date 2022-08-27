import "./DetailRow.css";

function DetailRow() {
  return (
    <div className="container-DetailRow">
      <div className="DetailRowTop">Ultimo Producto Agregado</div>
      <div><img src="/img/18.jpeg" style={{width:'30%'}}/></div>
      <hr/>
      <div className="DetailRowContent">
      <p className="DetailRow">Nombre Producto</p>
      <p className="DetailRowPrecio">Precio</p>
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      
    </div>
  );
}
export default DetailRow;
