import "./TotalProducts.css";

function TotalProducts() {
  return (
    <div className="container-TotalProducts">
      <div className="TotalProductsTop">Todos los Productos</div>
      <table class="default">
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descuento</th>
          <th>Marca</th>
          <th>Categoria</th>
        </tr>

        <tr>
          <td>Nike Air Max 90</td>
          <td>$50.000</td>
          <td>10%</td>
          <td>Nike</td>
          <td>Hombre</td>
        </tr>
        <tr>
          <td>Adizero</td>
          <td>$60.000</td>
          <td>15%</td>
          <td>Adidas</td>
          <td>Mujer</td>
        </tr>
      </table>
    </div>
  );
}
export default TotalProducts;
