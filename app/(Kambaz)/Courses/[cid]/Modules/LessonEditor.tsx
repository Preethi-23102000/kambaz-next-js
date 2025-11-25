// app/Courses/LessonEditor.tsx
import { Modal, FormControl, Button } from "react-bootstrap";

export default function LessonEditor({
  show,
  handleClose,
  dialogTitle,
  lessonName,
  setLessonName,
  onSave,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  lessonName: string;
  setLessonName: (name: string) => void;
  onSave: () => Promise<void>;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
          placeholder="Lesson name"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={async () => {
            await onSave();
            handleClose();
          }}
        >
          Add Lesson
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
