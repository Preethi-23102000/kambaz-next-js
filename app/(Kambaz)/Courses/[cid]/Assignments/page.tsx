import Link from "next/link";
import AssignmentControl from "./AssignmentControl";
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";

import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControl />

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
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <Link
                href="/Courses/CS1234/Assignments/123"
                className="wd-assignment-link"
              >
                <Row>
                  <Col xs={2} md={1} className=" text-nowrap">
                    <BsGripVertical className="me-2 fs-3 align-center" />
                    <MdEditNote className="me-2 fs-3 align-center font-green" />
                  </Col>
                  <Col xs={8} md={9}>
                    <p className="bold-fs mb-0">A1</p>

                    <p className="assignment-details mb-0">
                      <span className="assignment-details font-red">
                        Multiple Modules
                      </span>{" "}
                      | <b>Not available until </b>May 6 at 12:00 am |
                    </p>
                    <p className="assignment-details mb-0">
                      <b>Due </b> May 13 at 11.59 pm | 100 pts
                    </p>
                  </Col>
                  <Col xs={1}>
                    <span className="text-nowrap align-text-right align-center-2">
                      <LessonControlButtons />
                    </span>
                  </Col>
                </Row>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <Link
                href="/Courses/CS1234/Assignments/123"
                className="wd-assignment-link"
              >
                <Row>
                  <Col xs={2} md={1} className=" text-nowrap">
                    <BsGripVertical className="me-2 fs-3 align-center" />
                    <MdEditNote className="me-2 fs-3 align-center font-green" />
                  </Col>
                  <Col xs={8} md={9}>
                    <p className="bold-fs mb-0">A2</p>

                    <p className="assignment-details mb-0">
                      <span className="assignment-details font-red">
                        Multiple Modules
                      </span>{" "}
                      | <b>Not available until </b>May 13 at 12:00 am |
                    </p>
                    <p className="assignment-details mb-0">
                      <b>Due </b> May 20 at 11.59 pm | 100 pts
                    </p>
                  </Col>
                  <Col xs={1}>
                    <span className="text-nowrap align-text-right align-center-2">
                      <LessonControlButtons />
                    </span>
                  </Col>
                </Row>
              </Link>
            </ListGroupItem>

            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <Link
                href="/Courses/CS1234/Assignments/123"
                className="wd-assignment-link"
              >
                <Row>
                  <Col xs={2} md={1} className=" text-nowrap">
                    <BsGripVertical className="me-2 fs-3 align-center" />
                    <MdEditNote className="me-2 fs-3 align-center font-green" />
                  </Col>
                  <Col xs={8} md={9}>
                    <p className="bold-fs mb-0">A3</p>

                    <p className="assignment-details mb-0">
                      <span className="assignment-details font-red">
                        Multiple Modules
                      </span>
                      | <b> Not available until </b>May 20 at 12:00 am |
                    </p>
                    <p className="assignment-details mb-0">
                      <b>Due </b> May 27 at 11.59 pm | 100 pts
                    </p>
                  </Col>
                  <Col xs={1}>
                    <span className="text-nowrap align-text-right align-center-2">
                      <LessonControlButtons />
                    </span>
                  </Col>
                </Row>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-quizzes">
        <ListGroupItem
          id="wd-quizzes-title"
          className="wd-module p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary ">
            <BsGripVertical className="me-2 fs-3" /> <MdArrowDropDown />
            &nbsp; <span className="bold-fs">QUIZZES</span>
            <AssignmentControlButtons />
            <span className="section-weightage float-end"> 10% of Total</span>
          </div>
          <ListGroup className="wd-quizzes-list rounded-0">
            <ListGroupItem className="wd-quizzes-list-item p-3 ps-1">
              <Link href="./Quizzes" className="wd-quizzes-link">
                <Row>
                  <Col xs={2} md={1} className=" text-nowrap">
                    <BsGripVertical className="me-2 fs-3 align-center" />
                    <MdEditNote className="me-2 fs-3 align-center font-green" />
                  </Col>
                  <Col xs={8} md={9}>
                    <p className="bold-fs mb-0">Q1</p>

                    <p className="quizzes-details mb-0">
                      <span className="quizzes-details font-red">
                        Multiple Modules
                      </span>
                      | <b>Not available until </b>May 13 at 12:00 am |
                    </p>
                    <p className="quizzes-details mb-0">
                      <b>Due </b> May 14 at 11.59 pm | 100 pts
                    </p>
                  </Col>
                  <Col xs={1}>
                    <span className="text-nowrap align-text-right align-center-2">
                      <LessonControlButtons />
                    </span>
                  </Col>
                </Row>
              </Link>
            </ListGroupItem>

            <ListGroupItem className="wd-quizzes-list-item p-3 ps-1">
              <Link href="./Quizzes" className="wd-quizzes-link">
                <Row>
                  <Col xs={2} md={1} className=" text-nowrap">
                    <BsGripVertical className="me-2 fs-3 align-center" />
                    <MdEditNote className="me-2 fs-3 align-center font-green" />
                  </Col>
                  <Col xs={8} md={9}>
                    <p className="bold-fs mb-0">Q2</p>

                    <p className="quizzes-details mb-0">
                      <span className="quizzes-details font-red">
                        Multiple Modules
                      </span>
                      | <b>Not available until </b>May 20 at 12:00 am |
                    </p>
                    <p className="quizzes-details mb-0">
                      <b>Due </b> May 21 at 11.59 pm | 100 pts
                    </p>
                  </Col>
                  <Col xs={1}>
                    <span className="text-nowrap align-text-right align-center-2">
                      <LessonControlButtons />
                    </span>
                  </Col>
                </Row>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-project">
        <ListGroupItem
          id="wd-project-title"
          className="wd-module p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> <MdArrowDropDown />
            &nbsp; <span className="bold-fs">PROJECT</span>
            <AssignmentControlButtons />
            <span className="section-weightage float-end"> 20% of Total</span>
          </div>
          <ListGroup className="wd-project-list rounded-0">
            <ListGroupItem className="wd-project-list-item p-3 ps-1">
              <Row>
                <Col xs={2} md={1} className=" text-nowrap">
                  <BsGripVertical className="me-2 fs-3 align-center" />
                  <MdEditNote className="me-2 fs-3 align-center font-green" />
                </Col>
                <Col xs={8} md={9}>
                  <p className="bold-fs mb-0">Final Project</p>

                  <p className="project-details mb-0  font-red">
                    Multiple Modules
                  </p>
                  <p className="project-details mb-0">
                    <b>Due </b> July 17 at 11.59 pm | 100 pts
                  </p>
                </Col>
                <Col xs={1}>
                  <span className="text-nowrap align-text-right align-center-2">
                    <LessonControlButtons />
                  </span>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="rounded-0" id="wd-exam">
        <ListGroupItem
          id="wd-exam-title"
          className="wd-module p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> <MdArrowDropDown />
            &nbsp; <span className="bold-fs">EXAMS</span>
            <AssignmentControlButtons />
            <span className="section-weightage float-end"> 30% of Total</span>
          </div>
          <ListGroup className="wd-exam-list rounded-0">
            <ListGroupItem className="wd-exam-list-item p-3 ps-1">
              <Row>
                <Col xs={2} md={1} className=" text-nowrap">
                  <BsGripVertical className="me-2 fs-3 align-center" />
                  <MdEditNote className="me-2 fs-3 align-center font-green" />
                </Col>
                <Col xs={8} md={9}>
                  <p className="bold-fs mb-0">Exam 1</p>

                  <p className="exam-details mb-0  font-red">
                    Multiple Modules
                  </p>
                  <p className="exam-details mb-0">
                    <b>Due </b> May 17 at 11.59 pm | 100 pts
                  </p>
                </Col>
                <Col xs={1}>
                  <span className="text-nowrap align-text-right align-center-2">
                    <LessonControlButtons />
                  </span>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem className="wd-exam-list-item p-3 ps-1">
              <Row>
                <Col xs={2} md={1} className=" text-nowrap">
                  <BsGripVertical className="me-2 fs-3 align-center" />
                  <MdEditNote className="me-2 fs-3 align-center font-green" />
                </Col>
                <Col xs={8} md={9}>
                  <p className="bold-fs mb-0">Exam 2</p>

                  <p className="exam-details mb-0  font-red">
                    Multiple Modules
                  </p>
                  <p className="exam-details mb-0">
                    <b>Due </b> July 17 at 11.59 pm | 100 pts
                  </p>
                </Col>
                <Col xs={1}>
                  <span className="text-nowrap align-text-right align-center-2">
                    <LessonControlButtons />
                  </span>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
