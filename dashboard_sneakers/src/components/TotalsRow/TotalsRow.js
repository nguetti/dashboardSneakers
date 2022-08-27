import TotalProducts from './TotalProducts';
import TotalUsers from './TotalUsers';
import TotalBrands from './TotalBrands';
import './TotalsRow.css'


function TotalsRow () {
    return (
<div className="container-principal">
    <TotalProducts />
    <TotalUsers />
    <TotalBrands />
</div>
    )
}
export default TotalsRow;