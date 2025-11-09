import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-2 flex-wrap">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary"
        style={{ cursor: "pointer" }}
      />
      <FaTrash
        className="text-danger"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this module?"
          );
          if (confirmDelete) {
            deleteModule(moduleId);
          }
        }}
      />

      <GreenCheckmark />
      <BsPlus style={{ fontSize: "1.5rem" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
