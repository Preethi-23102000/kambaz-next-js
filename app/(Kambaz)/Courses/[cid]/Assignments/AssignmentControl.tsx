import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AssignmentSearchBar from "./AssignmentSearchBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import type { Assignment } from "../../../Database/userDefinedTypes";
import * as client from "../../client";
import { useRouter } from "next/navigation";

export default function AssignmentControl({ cid }: { cid: string | string[] }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser && currentUser.role === "FACULTY";
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const router = useRouter();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const generateNewAssignmentId = () => {
    const courseLastDigit = courseId.slice(-1);

    const courseAssignments = assignments.filter(
      (a: Assignment) => a.course === courseId
    );

    if (courseAssignments.length === 0) {
      return `A${courseLastDigit}01`;
    }

    let maxSequence = 0;
    courseAssignments.forEach((a: Assignment) => {
      if (a._id && typeof a._id === "string") {
        const sequencePart = a._id.slice(-2);
        const sequence = parseInt(sequencePart);
        if (sequence > maxSequence) {
          maxSequence = sequence;
        }
      }
    });

    const newSequence = (maxSequence + 1).toString().padStart(2, "0");

    return `A${courseLastDigit}${newSequence}`;
  };

  const handleCreateNewAssignment = async () => {
    const newId = generateNewAssignmentId();

    const today = () => {
      const now = new Date();
      return now.toISOString().split("T")[0];
    };

    const oneWeekFromToday = () => {
      const now = new Date();
      now.setDate(now.getDate() + 7);
      return now.toISOString().split("T")[0];
    };

    const oneMonthFromToday = () => {
      const now = new Date();
      now.setDate(now.getDate() + 30);
      return now.toISOString().split("T")[0];
    };

    const formatDateWordsLocal = (dateString: string) => {
      const [year, month, day] = dateString.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    };

    const newAssignment = {
      _id: newId,
      title: "New Assignment",
      course: courseId,
      modules: "Multiple Modules",
      points: 100,
      available: today(),
      due: oneWeekFromToday(),
      until: oneMonthFromToday(),
      availableDateWords: formatDateWordsLocal(today()),
      dueDateWords: formatDateWordsLocal(oneWeekFromToday()),
      description: {
        summary: "New assignment description",
        requirements: [],
        note: "",
      },
      assignmentGroup: "ASSIGNMENTS",
      displayGrade: "Percentage",
      submissionType: "Online",
      assignedTo: "Everyone",
    };

    try {
      await client.createAssignmentsForCourse(courseId, newAssignment);

      router.push(`/Courses/${courseId}/Assignments/${newId}`);
    } catch (error) {
      console.error("Error creating assignment:", error);
      alert("Failed to create assignment");
    }
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
            onClick={handleCreateNewAssignment}
          >
            <FaPlus className="position-relative me-2 " />
            Assignment
          </Button>
        )}
      </div>
    </div>
  );
}
