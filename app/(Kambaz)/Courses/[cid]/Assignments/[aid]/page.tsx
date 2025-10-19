"use client";

// Function to get today's date in YYYY-MM-DD format
const today = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Function to get the date one week from today in YYYY-MM-DD format,
// just to indicate the user has not provided dur date hence setting to default 1 week timeline
const oneWeekFromToday = () => {
  const now = new Date();
  now.setDate(now.getDate() + 7);
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Function to get the date onw month from today in YYYY-MM-DD format approximately,
// just to indicate the user has not provided available until hence setting to default 1 month timeline
const oneMonthFromToday = () => {
  const now = new Date();
  now.setDate(now.getDate() + 30);
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

export default function AssignmentEditor() {
  console.log("today() =>", today());

  const { cid } = useParams();
  const { aid } = useParams();

  const assignments = db.assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const assignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );

  return (
    <div id="wd-assignments-editor">
      <FormGroup
        className="mb-3 margin-bottom-15"
        controlId="wd-assignment-name"
      >
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          defaultValue={assignment ? assignment.title : "No title Provided"}
        />
      </FormGroup>

      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl
          as="textarea"
          rows={10}
          cols={50}
          defaultValue={
            assignment //using nexted ternary operators to check for existence of description, summary, requirements, and note
              ? assignment.description
                ? `${
                    assignment.description.summary
                      ? assignment.description.summary
                      : "No summary provided."
                  }\n\n${
                    assignment.description.requirements &&
                    assignment.description.requirements.length > 0
                      ? "The landing page should include the following:\n- " +
                        assignment.description.requirements.join("\n- ") +
                        "\n\n"
                      : "No requirements provided.\n\n"
                  }${
                    assignment.description.note
                      ? assignment.description.note
                      : "No note provided."
                  }`
                : "No description provided."
              : "No assignment found."
          }
        />
      </FormGroup>

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
              className="margin-bottom-15 margin-top-15"
              defaultValue={
                assignment ? (assignment.points ? assignment.points : 0) : 0
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
              defaultValue={
                assignment
                  ? assignment.assignmentGroup
                    ? assignment.assignmentGroup
                    : "none"
                  : "none"
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
              defaultValue={
                assignment
                  ? assignment.displayGrade
                    ? assignment.displayGrade
                    : "none"
                  : "none"
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
                defaultValue={
                  assignment
                    ? assignment.submissionType
                      ? assignment.submissionType
                      : "none"
                    : "none"
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
                  {assignment
                    ? assignment.assignedTo
                      ? assignment.assignedTo
                      : "Not Assigned"
                    : "Not Assigned"}
                  <RxCross2 className="margin-left-15 justify-content-end" />
                </span>
              </div>
              <Row>
                <Col sm={12} className=" margin-top-15">
                  <b>Due</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={
                        assignment
                          ? assignment.due && assignment.due !== ""
                            ? assignment.due
                            : oneWeekFromToday()
                          : oneWeekFromToday()
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
                      value={
                        assignment
                          ? assignment.available && assignment.available !== ""
                            ? assignment.available
                            : today()
                          : today()
                      }
                    />
                  </div>
                </Col>
                <Col sm={6} className=" margin-top-15">
                  <b>Until</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={
                        assignment
                          ? assignment.until && assignment.until !== ""
                            ? assignment.until
                            : oneMonthFromToday()
                          : oneMonthFromToday()
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
      <Link href={`/Courses/${cid}/Assignments`}>
        <Button
          variant="danger"
          id="wd-save-assignment-btn"
          className="text-nowrap float-end assignment-btns"
        >
          Save
        </Button>
      </Link>

      <Link href={`/Courses/${cid}/Assignments`}>
        <Button
          variant="secondary"
          id="wd-cancel-assignment-btn"
          className="text-nowrap float-end assignment-btns"
        >
          Cancel
        </Button>
      </Link>
    </div>
  );
}
