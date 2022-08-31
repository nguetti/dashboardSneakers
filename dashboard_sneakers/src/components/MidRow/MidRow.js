import LastUser from "./LastUser";
import Brands from "./Brands";
import "./MidRow.css";

function MidRow() {
  return (
    <div className="col-12 col-sm-8 col-md-9 col-lg-4 d-flex justify-content-center align-items-center align-content-around flex-wrap"> 
        <div className="row w-100 mt-2">
          <div className="col">
            <Brands />
          </div>
        </div>
        <div className="row w-100 mb-2">
          <div className="col ">
          <LastUser />
          </div>
        </div>
      
    </div>
  );
}
export default MidRow;
