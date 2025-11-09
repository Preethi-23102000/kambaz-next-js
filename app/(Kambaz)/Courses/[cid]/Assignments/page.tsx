"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import Link from "next/link";
import AssignmentControl from "./AssignmentControl";
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import SingleAssignemntControlButtons from "./SingleAssignmentControlButtons";

import AssignmentControlButtons from "./AssignmentControlButtons";
import type { Assignment } from "../../../Database/userDefinedTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const courseAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments">
      <AssignmentControl cid={cid as string} />

      <ListGroup className="rounded-0" id="wd-assignment-section">
        <ListGroupItem
          id="wd-assignments-title"
          className="wd-module p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary ">
            <BsGripVertical className="me-2 fs-3" /> <MdArrowDropDown />
            &nbsp;<span className="bold-fs">ASSIGNMENTS</span>
            <AssignmentControlButtons />
            <span className="section-weightage float-end"> 40% of Total</span>
          </div>
          {courseAssignments.length === 0 ? (
            <div className="p-4 text-center text-muted">
              <b>No assignments available for this course.</b>
            </div>
          ) : (
            <ListGroup className="wd-assignment-list rounded-0">
              {courseAssignments.map((assignment: Assignment) => (
                <ListGroupItem
                  key={assignment._id}
                  className="wd-assignment-list-item p-3 ps-1"
                >
                  <Row>
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link"
                    >
                      <div className="d-flex align-items-center flex-row">
                        <Col xs={2} md={1} className="text-nowrap me-2">
                          <BsGripVertical className="me-2 fs-3 align-center" />
                          <MdEditNote className="me-2 fs-3 align-center font-green" />
                        </Col>

                        <Col xs={8} md={9}>
                          <p className="bold-fs mb-0">{assignment.title}</p>

                          <p className="assignment-details mb-0">
                            <span className="assignment-details font-red">
                              {assignment.modules}
                            </span>
                            | <b>Not available until </b>
                            {assignment.availableDateWords} |
                          </p>

                          <p className="assignment-details mb-0">
                            <b>Due </b>
                            {assignment.dueDateWords} | {assignment.points} pts
                          </p>
                        </Col>
                      </div>
                    </Link>

                    <Col xs={1}>
                      <span className="text-nowrap align-text-right align-center-2">
                        {isFaculty && (
                          <SingleAssignemntControlButtons
                            assignmentId={assignment._id}
                            deleteAssignment={(assignmentId) =>
                              dispatch(deleteAssignment(assignmentId))
                            }
                          />
                        )}
                      </span>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
