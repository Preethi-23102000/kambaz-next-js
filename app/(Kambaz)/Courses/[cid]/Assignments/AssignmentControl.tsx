import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AssignmentSearchBar from "./AssignmentSearchBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import type { Assignment } from "../../../Database/userDefinedTypes";

export default function AssignmentControl({ cid }: { cid: string | string[] }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser && currentUser.role === "FACULTY";
  const courseId = Array.isArray(cid) ? cid[0] : cid;

  // Get assignments from Redux
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  // Generate new assignment ID based on course pattern
  const generateNewAssignmentId = () => {
    // Extract last digit from course (e.g., "RS101" -> "1", "RS102" -> "2")
    const courseLastDigit = courseId.slice(-1);

    // Find all assignments for this course
    const courseAssignments = assignments.filter(
      (a: Assignment) => a.course === courseId
    );

    // If no assignments exist for this course, start with A_01
    if (courseAssignments.length === 0) {
      return `A${courseLastDigit}01`;
    }

    // Find the max sequence number for this course
    let maxSequence = 0;
    courseAssignments.forEach((a: Assignment) => {
      // Extract the last 2 digits (sequence number)
      // e.g., "A101" -> "01", "A203" -> "03"
      const sequencePart = a._id.slice(-2);
      const sequence = parseInt(sequencePart);
      if (sequence > maxSequence) {
        maxSequence = sequence;
      }
    });

    // Increment sequence and pad to 2 digits
    const newSequence = (maxSequence + 1).toString().padStart(2, "0");

    // Return new ID: A + courseLastDigit + newSequence
    return `A${courseLastDigit}${newSequence}`;
  };

  return (
    <div
      id="wd-assignment-controls"
      className="d-flex flex-column flex-sm-row align-items-sm-center mb-3"
    >
      <div className="w-100 me-sm-3 mb-2 mb-sm-0">
        <AssignmentSearchBar />
      </div>
      <div className="d-flex flex-row gap-2 ms-sm-auto">
        {isFaculty && (
          <Button
            variant="secondary"
            id="wd-add-group-btn"
            className="text-nowrap"
          >
            <FaPlus className="position-relative me-2" />
            Group
          </Button>
        )}

        {isFaculty && (
          <Button
            variant="danger"
            id="wd-add-assignment-btn"
            className="text-nowrap"
            href={`/Courses/${courseId}/Assignments/${generateNewAssignmentId()}`}
          >
            <FaPlus className="position-relative me-2 " />
            Assignment
          </Button>
        )}
      </div>
    </div>
  );
}
