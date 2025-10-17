"use client";
import Link from "next/link";

import {
  FormControl,
  FormGroup,
  Button,
  Row,
  Col,
  InputGroup,
  FormSelect,
} from "react-bootstrap";
import { BsCalendar4 } from "react-icons/bs";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Row>
        <Col md={6}>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-username">
            <FormControl placeholder="username" defaultValue={"alice"} />
          </FormGroup>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-password">
            <FormControl
              type="password"
              placeholder="password"
              defaultValue={"123"}
            />
          </FormGroup>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-firstname">
            <FormControl placeholder="first name" defaultValue={"Alice"} />
          </FormGroup>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-lastname">
            <FormControl placeholder="last name" defaultValue={"Wonderland"} />
          </FormGroup>
          <InputGroup className="mb-3" id="wd-dob">
            <FormControl defaultValue={"mm/dd/yyyy"} />
            <InputGroup.Text>
              <BsCalendar4 />
            </InputGroup.Text>
          </InputGroup>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-email">
            <FormControl
              type="email"
              placeholder="somename@example.com"
              defaultValue={"alice.wonderland@rabbit.com"}
              className="mb-3 margin-bottom-15"
            />
          </FormGroup>

          <FormSelect className="mb-3 margin-bottom-15" id="wd-user-type">
            <option selected>User</option>
            <option>Admin</option>
          </FormSelect>
          <Link href="Signin" className="text-white">
            <Button
              variant="primary"
              id="wd-signin-btn"
              className="text-nowrap float-end account-btns"
            >
              Sign Out
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
