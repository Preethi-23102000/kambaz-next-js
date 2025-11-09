import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
export default function LessonControlButtons({
  moduleId,
  lessonId,
  onEdit,
  onDelete,
}: {
  moduleId: string;
  lessonId: string;
  onEdit: (moduleId: string, lessonId: string) => void;
  onDelete: (moduleId: string, lessonId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-2 flex-wrap">
      <FaPencil
        className="text-primary"
        onClick={() => onEdit(moduleId, lessonId)}
        style={{ cursor: "pointer" }}
      />
      <FaTrash
        className="text-danger"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this lesson?"
          );
          if (confirmDelete) {
            onDelete(moduleId, lessonId);
          }
        }}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
