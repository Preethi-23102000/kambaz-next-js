"use client";

import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div id="wd-modules">
      <Row>
        <Col className="margin-bottom-15">
          <ModulesControls />
        </Col>
      </Row>
      <Row>
        <Col className="margin-top-15">
          <ListGroup className="rounded-0" id="wd-modules">
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 1
                <ModuleControlButtons />
              </div>
              <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development
                  <LessonControlButtons />
                </ListGroupItem>

                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1<LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2<LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 2
                <ModuleControlButtons />
              </div>
              <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to CSS
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is bootstrap
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1<LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2<LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 3
                <ModuleControlButtons />
              </div>
              <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to JavaScript
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is React.js
                  <LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1<LessonControlButtons />
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2<LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
