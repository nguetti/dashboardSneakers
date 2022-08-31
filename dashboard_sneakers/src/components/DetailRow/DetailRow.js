import "./DetailRow.css";

function DetailRow() {
  return (
    <div className="col-12 col-lg-6 p-0 container-DetailRow">
      <div className="DetailRowTop">Ultimo Producto Agregado</div>
      <div className="DetailRowImage">
        <img src="/img/18.jpeg" style={{ width: "30%" }} alt="Imagen del ultimo producto agregado"/>
      </div>
      <div className="DetailRowContent">
        <p>Nike Air Max</p>
        <p>$100.000</p>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
    </div>
  );
}
export default DetailRow;
