// import { Button } from "react-bootstrap";
// import { FaPlus } from "react-icons/fa6";
// import AssignmentSearchBar from "./AssignmentSearchBar";
// export default function AssignmentControl() {
//   return (
//     <div id="wd-assignment-controls" className="text-nowrap">
//       <AssignmentSearchBar />
//       <Button
//         variant="danger"
//         size="lg"
//         className="me-1 float-end"
//         id="wd-add-assignment-btn"
//       >
//         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//         Assignment
//       </Button>

//       <Button
//         variant="secondary"
//         size="lg"
//         className="me-1 float-end"
//         id="wd-add-group-btn"
//       >
//         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//         Group
//       </Button>
//     </div>
//   );
// }

import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AssignmentSearchBar from "./AssignmentSearchBar";

export default function AssignmentControl() {
  return (
    <div
      id="wd-assignment-controls"
      className="d-flex flex-column flex-sm-row align-items-sm-center mb-3"
    >
      <div className="w-100 me-sm-3 mb-2 mb-sm-0">
        <AssignmentSearchBar />
      </div>
      <div className="d-flex flex-row gap-2 ms-sm-auto">
        <Button
          variant="secondary"
          id="wd-add-group-btn"
          className="text-nowrap"
        >
          <FaPlus className="position-relative me-2" />
          Group
        </Button>

        <Button
          variant="danger"
          id="wd-add-assignment-btn"
          className="text-nowrap"
        >
          <FaPlus className="position-relative me-2 " />
          Assignment
        </Button>
      </div>
    </div>
  );
}
