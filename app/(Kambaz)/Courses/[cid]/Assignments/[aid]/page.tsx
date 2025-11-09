"use client";

import { useParams } from "next/navigation";
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  Form,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import type { Assignment } from "../../../../Database/userDefinedTypes";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import Link from "next/link";

// Helper functions
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

const formatDateWords = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  // GET assignments from Redux instead of database
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  // Find existing assignment
  const existingAssignment = assignments.find(
    (assignment: Assignment) => assignment._id === aid
  );

  // Check if this is editing an existing assignment
  const isEditMode = existingAssignment !== undefined;

  // CREATE state for form data
  const [formData, setFormData] = useState<Assignment>(
    existingAssignment || {
      _id: aid as string,
      title: "New Assignment",
      course: cid as string,
      modules: "Module 1",
      availableDateWords: "",
      dueDateWords: "",
      available: today(),
      due: oneWeekFromToday(),
      until: oneMonthFromToday(),
      description: {
        summary: "New assignment description",
        requirements: [],
        note: "",
      },
      assignmentGroup: "ASSIGNMENTS",
      displayGrade: "Percentage",
      submissionType: "Online",
      assignedTo: "Everyone",
      points: 100,
    }
  );

  //to modify disply
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  // If assignment not found, show error
  if (!existingAssignment && isEditMode) {
    return (
      <div className="container mt-5">
        <h3>Assignment not found</h3>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="primary">Back to Assignments</Button>
        </Link>
      </div>
    );
  }
  // STUDENT VIEW - Read-only display
  if (!isFaculty) {
    return (
      <div id="wd-assignment-view" className="container mt-4">
        {/* Assignment Title */}
        <h2 className="mb-4">{formData.title}</h2>

        <hr />

        {/* Assignment Details Card */}
        <Card className="mb-4">
          <Card.Body>
            {/* Description Section */}
            <div className="mb-4">
              <h5 className="text-muted mb-3">Description</h5>
              <div className="ps-3" style={{ whiteSpace: "pre-wrap" }}>
                {formData.description.summary}
                {formData.description.requirements.length > 0 && (
                  <>
                    {"\n\n"}
                    <strong>Requirements:</strong>
                    {formData.description.requirements.map((req, index) => (
                      <div key={index}>• {req}</div>
                    ))}
                  </>
                )}
                {formData.description.note && (
                  <>
                    {"\n\n"}
                    <em>{formData.description.note}</em>
                  </>
                )}
              </div>
            </div>

            <hr />

            {/* Points */}
            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Points:</strong>
              </Col>
              <Col xs={8}>{formData.points}</Col>
            </Row>

            {/* Assignment Group */}
            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Assignment Group:</strong>
              </Col>
              <Col xs={8}>{formData.assignmentGroup}</Col>
            </Row>

            {/* Display Grade As */}
            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Display Grade as:</strong>
              </Col>
              <Col xs={8}>{formData.displayGrade}</Col>
            </Row>

            {/* Submission Type */}
            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Submission Type:</strong>
              </Col>
              <Col xs={8}>{formData.submissionType}</Col>
            </Row>

            <hr />

            {/* Assignment Dates Section */}
            <div className="p-3 rounded">
              <h6 className="mb-3">Important Dates</h6>

              {/* Due Date */}
              <Row className="mb-2">
                <Col xs={4} className="text-end">
                  <strong>Due:</strong>
                </Col>
                <Col xs={8}>
                  <span>
                    {new Date(formData.due).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {" at 11:59pm"}
                </Col>
              </Row>

              {/* Available From */}
              <Row className="mb-2">
                <Col xs={4} className="text-end">
                  <strong>Available from:</strong>
                </Col>
                <Col xs={8}>
                  {new Date(formData.available).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Col>
              </Row>

              {/* Until */}
              <Row className="mb-2">
                <Col xs={4} className="text-end">
                  <strong>Until:</strong>
                </Col>
                <Col xs={8}>
                  {new Date(formData.until).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Col>
              </Row>
            </div>

            {/* Assigned To */}
            <Row className="mt-3">
              <Col xs={4} className="text-end">
                <strong>Assigned to:</strong>
              </Col>
              <Col xs={8}>{formData.assignedTo}</Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Action Buttons for Students */}
        <div className="d-flex gap-2 mb-5">
          <Button variant="primary" size="lg">
            Submit Assignment
          </Button>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="outline-secondary" size="lg">
              Back to Assignments
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // FACULTY VIEW - Editable form
  return (
    <div id="wd-assignments-editor">
      <FormGroup
        className="mb-3 margin-bottom-15"
        controlId="wd-assignment-name"
      >
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter assignment name"
        />
      </FormGroup>

      <FormControl
        as="textarea"
        rows={10}
        value={
          formData.description.summary +
          (formData.description.requirements.length > 0
            ? "\n\n" +
              formData.description.requirements.map((r) => `- ${r}`).join("\n")
            : "") +
          (formData.description.note ? "\n\n" + formData.description.note : "")
        }
        onChange={(e) => {
          // Simple version: just store as summary
          setFormData({
            ...formData,
            description: {
              ...formData.description,
              summary: e.target.value,
            },
          });
        }}
        placeholder="Enter assignment description"
      />

      <FormGroup className="mb-3" controlId="wd-points">
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-end align-items-center  margin-bottom-15 margin-top-15"
          >
            <FormLabel>Points</FormLabel>
          </Col>

          <Col xs={8}>
            <FormControl
              type="number"
              className="margin-bottom-15 margin-top-15"
              value={formData.points}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  points: parseInt(e.target.value) || 0,
                })
              }
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-group">
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-end align-items-center  margin-bottom-15 margin-top-15"
          >
            <FormLabel>Assignment Group</FormLabel>
          </Col>

          <Col xs={8} className=" margin-bottom-15 margin-top-15">
            <FormSelect
              value={formData.assignmentGroup}
              onChange={(e) =>
                setFormData({ ...formData, assignmentGroup: e.target.value })
              }
            >
              <option value="none" disabled>
                No Group Selected
              </option>
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>PROJECT</option>
              <option>EXAMS</option>
            </FormSelect>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-display-grade-as">
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-end align-items-center margin-bottom-15 margin-top-15"
          >
            <FormLabel>Display Grade as</FormLabel>
          </Col>

          <Col xs={8} className="margin-bottom-15 margin-top-15">
            <FormSelect
              value={formData.displayGrade}
              onChange={(e) =>
                setFormData({ ...formData, displayGrade: e.target.value })
              }
            >
              <option value="none" disabled>
                No Grade type Selected
              </option>
              <option>Percentage</option>
              <option>Grades</option>
            </FormSelect>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="mb-3 " controlId="wd-submission-type">
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-end margin-bottom-15 margin-top-15"
          >
            <FormLabel>Submission Type</FormLabel>
          </Col>

          <Col xs={8} className="margin-bottom-15 margin-top-15">
            <div className="border-round">
              <FormSelect
                className="margin-bottom-15 margin-top-15"
                value={formData.submissionType}
                onChange={(e) =>
                  setFormData({ ...formData, submissionType: e.target.value })
                }
              >
                <option value="none" disabled>
                  No Group Selected
                </option>
                <option>Online</option>
                <option>On Paper</option>
              </FormSelect>

              <div className="margin-bottom-15 margin-top-15">
                <b>Online Entry Options</b>
              </div>
              <Form.Check
                type="checkbox"
                label="Text Entry"
                className="margin-bottom-15 margin-top-15"
              />
              <Form.Check
                type="checkbox"
                label="Website URL"
                checked
                className="margin-bottom-15 margin-top-15"
              />
              <Form.Check
                type="checkbox"
                label="Media Recordings"
                className="margin-bottom-15 margin-top-15"
              />
              <Form.Check
                type="checkbox"
                label="Student Annotation"
                className="margin-bottom-15 margin-top-15"
              />
              <Form.Check
                type="checkbox"
                label="File Uploads"
                className="margin-bottom-15 margin-top-15"
              />
            </div>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-assign-to">
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-end margin-bottom-15 margin-top-15"
          >
            <FormLabel>Assign</FormLabel>
          </Col>

          <Col xs={8} className="margin-bottom-15 margin-top-15">
            <div className="border-round">
              <b>Assign to</b>
              <div className="border-round margin-bottom-15 ">
                <span className="solid-grey">
                  {formData.assignedTo}
                  <RxCross2 className="margin-left-15 justify-content-end" />
                </span>
              </div>
              <Row>
                <Col sm={12} className=" margin-top-15">
                  <b>Due</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={formData.due}
                      onChange={(e) =>
                        setFormData({ ...formData, due: e.target.value })
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={6} className=" margin-top-15">
                  <b>Available From</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={formData.available}
                      onChange={(e) =>
                        setFormData({ ...formData, available: e.target.value })
                      }
                    />
                  </div>
                </Col>
                <Col sm={6} className=" margin-top-15">
                  <b>Until</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={formData.until}
                      onChange={(e) =>
                        setFormData({ ...formData, until: e.target.value })
                      }
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </FormGroup>
      <hr />

      <Button
        variant="danger"
        id="wd-save-assignment-btn"
        className="text-nowrap float-end assignment-btns"
        onClick={() => {
          // Format date words for display
          const updatedFormData = {
            ...formData,
            availableDateWords: new Date(formData.available).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
              }
            ),
            dueDateWords: new Date(formData.due).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
          };

          if (isEditMode) {
            dispatch(updateAssignment(updatedFormData));
          } else {
            dispatch(addAssignment(updatedFormData));
          }

          router.push(`/Courses/${cid}/Assignments`);
        }}
      >
        Save
      </Button>

      <Button
        variant="secondary"
        id="wd-cancel-assignment-btn"
        className="text-nowrap float-end assignment-btns me-2"
        onClick={() => router.push(`/Courses/${cid}/Assignments`)}
      >
        Cancel
      </Button>
    </div>
  );
}
