import "./TotalProducts.css";

function TotalProducts() {
  return (
    <div className="container-TotalProducts">
      <div className="TotalProductsTop">Todos los Productos</div>
      <table class="default">
        <tbody>
          <thead>Nombre</thead>
          <thead>Precio</thead>
          <thead>Descuento</thead>
          <thead>Marca</thead>
          <thead>Categoria</thead>
        </tbody>

        <tbody>
          <td>Nike Air Max 90</td>
          <td>$50.000</td>
          <td>10%</td>
          <td>Nike</td>
          <td>Hombre</td>
        </tbody>
        <tbody>
          <td>Adizero</td>
          <td>$60.000</td>
          <td>15%</td>
          <td>Adidas</td>
          <td>Mujer</td>
        </tbody>
      </table>
    </div>
  );
}
export default TotalProducts;
