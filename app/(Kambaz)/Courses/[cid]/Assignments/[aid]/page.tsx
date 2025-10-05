"use client";
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  Form,
  InputGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormGroup
        className="mb-3 margin-bottom-15"
        controlId="wd-assignment-name"
      >
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue="A1" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl
          as="textarea"
          rows={10}
          cols={50}
          defaultValue={
            "The assignment is available online Submit a link to the landing page of your Web application running on Netify. The landing should include the following: Your full name and section links to each of the lab assignments link to the kanbas application. Links to all relevan source code repositories. The kambaz application should include a link to navigate back to the landing page."
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
              defaultValue="100"
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
            <FormSelect>
              <option selected>ASSIGNMENTS</option>
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
            <FormSelect>
              <option selected>Percentage</option>
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
              <FormSelect className="margin-bottom-15 margin-top-15">
                <option selected>Online</option>
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
                  Everyone
                  <RxCross2 className="margin-left-15 justify-content-end" />
                </span>
              </div>
              <Row>
                <Col sm={12} className=" margin-top-15">
                  <b>Due</b>
                  <div className="margin-bottom-15">
                    <InputGroup className="mb-3">
                      <FormControl defaultValue={"May 13, 2024, 11.59 pm"} />
                      <InputGroup.Text>
                        <FaRegCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={6} className=" margin-top-15">
                  <b>Available From</b>
                  <div className="margin-bottom-15">
                    <InputGroup className="mb-3">
                      <FormControl defaultValue={"May 6, 2024, 11.59 pm"} />
                      <InputGroup.Text>
                        <FaRegCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
                <Col sm={6} className=" margin-top-15">
                  <b>Until</b>
                  <div className="margin-bottom-15">
                    <InputGroup className="mb-3">
                      <FormControl defaultValue={"May 20, 2024, 11.59 pm"} />
                      <InputGroup.Text>
                        <FaRegCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
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
      >
        Save
      </Button>
      <Button
        variant="secondary"
        id="wd-cancel-assignment-btn"
        className="text-nowrap float-end assignment-btns"
      >
        Cancel
      </Button>
    </div>
  );
}
