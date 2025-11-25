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
import type { newAssignment } from "../../../../Database/userDefinedTypes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Link from "next/link";
import * as client from "../../../client";

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

const formatDateWordsLocal = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export default function AssignmentEditor() {
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid || "";
  const aid = Array.isArray(params.aid) ? params.aid[0] : params.aid || "";

  const router = useRouter();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const [assignment, setAssignment] = useState<newAssignment>({
    title: "New Assignment",
    course: cid,
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
  });

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchAssignment = async () => {
      if (aid && aid !== "new") {
        setLoading(true);
        try {
          const data = await client.findAssignmentById(aid as string);
          if (data) {
            setAssignment(data);
          } else {
            setNotFound(true);
          }
        } catch (error) {
          console.error("Error fetching assignment:", error);
          setNotFound(true);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchAssignment();
  }, [aid]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const updatedAssignment = {
        ...assignment,
        availableDateWords: formatDateWordsLocal(assignment.available),
        dueDateWords: formatDateWordsLocal(assignment.due),
      };

      if (aid === "new") {
        await client.createAssignmentsForCourse(
          cid as string,
          updatedAssignment
        );
      } else {
        await client.updateAssignments(updatedAssignment);
      }
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  if (loading && aid !== "new") {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading assignment...</h3>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="container mt-5">
        <h3>Assignment not found</h3>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="primary">Back to Assignments</Button>
        </Link>
      </div>
    );
  }

  // STUDENT VIEW
  if (!isFaculty) {
    return (
      <div id="wd-assignment-view" className="container mt-4">
        <h2 className="mb-4">{assignment.title}</h2>

        <hr />

        <Card className="mb-4">
          <Card.Body>
            <div className="mb-4">
              <h5 className="text-muted mb-3">Description</h5>
              <div className="ps-3" style={{ whiteSpace: "pre-wrap" }}>
                {assignment.description.summary}
                {assignment.description.requirements.length > 0 && (
                  <>
                    {"\n\n"}
                    <strong>Requirements:</strong>
                    {assignment.description.requirements.map(
                      (req: string, index: number) => (
                        <div key={index}>• {req}</div>
                      )
                    )}
                  </>
                )}
                {assignment.description.note && (
                  <>
                    {"\n\n"}
                    <em>{assignment.description.note}</em>
                  </>
                )}
              </div>
            </div>

            <hr />

            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Points:</strong>
              </Col>
              <Col xs={8}>{assignment.points}</Col>
            </Row>

            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Assignment Group:</strong>
              </Col>
              <Col xs={8}>{assignment.assignmentGroup}</Col>
            </Row>

            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Display Grade as:</strong>
              </Col>
              <Col xs={8}>{assignment.displayGrade}</Col>
            </Row>

            <Row className="mb-3">
              <Col xs={4} className="text-end">
                <strong>Submission Type:</strong>
              </Col>
              <Col xs={8}>{assignment.submissionType}</Col>
            </Row>

            <hr />

            <div className="p-3 rounded">
              <h6 className="mb-3">Important Dates</h6>

              <Row className="mb-2">
                <Col xs={4} className="text-end">
                  <strong>Due:</strong>
                </Col>
                <Col xs={8}>
                  <span>
                    {new Date(assignment.due).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {" at 11:59pm"}
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4} className="text-end">
                  <strong>Available from:</strong>
                </Col>
                <Col xs={8}>
                  {new Date(assignment.available).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Col>
              </Row>

              <Row className="mb-2">
                <Col xs={4} className="text-end">
                  <strong>Until:</strong>
                </Col>
                <Col xs={8}>
                  {new Date(assignment.until).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Col>
              </Row>
            </div>

            <Row className="mt-3">
              <Col xs={4} className="text-end">
                <strong>Assigned to:</strong>
              </Col>
              <Col xs={8}>{assignment.assignedTo}</Col>
            </Row>
          </Card.Body>
        </Card>

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

  // FACULTY VIEW
  return (
    <div id="wd-assignments-editor">
      <FormGroup
        className="mb-3 margin-bottom-15"
        controlId="wd-assignment-name"
      >
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          placeholder="Enter assignment name"
        />
      </FormGroup>

      <FormControl
        as="textarea"
        rows={10}
        value={
          assignment.description.summary +
          (assignment.description.requirements.length > 0
            ? "\n\n" +
              assignment.description.requirements
                .map((r: string) => `- ${r}`)
                .join("\n")
            : "") +
          (assignment.description.note
            ? "\n\n" + assignment.description.note
            : "")
        }
        onChange={(e) => {
          setAssignment({
            ...assignment,
            description: {
              ...assignment.description,
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
            className="d-flex justify-content-end align-items-center margin-bottom-15 margin-top-15"
          >
            <FormLabel>Points</FormLabel>
          </Col>

          <Col xs={8}>
            <FormControl
              type="number"
              className="margin-bottom-15 margin-top-15"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
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
            className="d-flex justify-content-end align-items-center margin-bottom-15 margin-top-15"
          >
            <FormLabel>Assignment Group</FormLabel>
          </Col>

          <Col xs={8} className="margin-bottom-15 margin-top-15">
            <FormSelect
              value={assignment.assignmentGroup}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  assignmentGroup: e.target.value,
                })
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
              value={assignment.displayGrade}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  displayGrade: e.target.value,
                })
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

      <FormGroup className="mb-3" controlId="wd-submission-type">
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
                value={assignment.submissionType}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    submissionType: e.target.value,
                  })
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
              <div className="border-round margin-bottom-15">
                <span className="solid-grey">
                  {assignment.assignedTo}
                  <RxCross2 className="margin-left-15 justify-content-end" />
                </span>
              </div>
              <Row>
                <Col sm={12} className="margin-top-15">
                  <b>Due</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={assignment.due}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          due: e.target.value,
                        })
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={6} className="margin-top-15">
                  <b>Available From</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={assignment.available}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          available: e.target.value,
                        })
                      }
                    />
                  </div>
                </Col>
                <Col sm={6} className="margin-top-15">
                  <b>Until</b>
                  <div className="margin-bottom-15">
                    <FormControl
                      type="date"
                      value={assignment.until}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          until: e.target.value,
                        })
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
        onClick={handleSave}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </Button>

      <Button
        variant="secondary"
        id="wd-cancel-assignment-btn"
        className="text-nowrap float-end assignment-btns me-2"
        onClick={handleCancel}
        disabled={loading}
      >
        Cancel
      </Button>
    </div>
  );
}
