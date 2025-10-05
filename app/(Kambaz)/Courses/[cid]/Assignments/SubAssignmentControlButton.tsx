import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function SubAssignmentControlButton() {
  return (
    <div className="float-end" style={{ top: "40%;" }}>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
