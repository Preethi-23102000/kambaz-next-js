import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
export default function SingleAssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="float-end d-flex align-items-center gap-2 flex-wrap">
      {/* <FaTrash
        className="text-danger"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this assignment?"
          );
          if (confirmDelete) {
            deleteAssignment(assignmentId);
          }
        }}
      /> */}
      <Modal show={showAlert} onHide={() => setShowAlert(false)} centered>
        <Modal.Body>
          <Alert variant="warning" className="mb-0">
            <Alert.Heading>Delete Assignment</Alert.Heading>
            Are you sure you want to delete this assignment?
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAlert(false)}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteAssignment(assignmentId);
              setShowAlert(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <FaTrash
        className="text-danger"
        style={{ cursor: "pointer" }}
        onClick={() => setShowAlert(true)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
