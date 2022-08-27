import LastUser from "./LastUser";
import Brands from './Brands'
import "./MidRow.css";

function MidRow() {
  return (
    <div className="container-midRow">
      <Brands />
      <LastUser />
    </div>
  );
}
export default MidRow;
