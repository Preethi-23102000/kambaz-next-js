"use client";
import Link from "next/link";
import { FormControl, FormGroup, Button, Row, Col } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign Up</h3>
      <Row className="margin-bottom-15">
        <Col md={6}>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-username">
            <FormControl placeholder="username" defaultValue={"Preethi"} />
          </FormGroup>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-password">
            <FormControl
              type="password"
              placeholder="password"
              defaultValue={"Preethi"}
            />
          </FormGroup>
          <FormGroup
            className="mb-3 margin-bottom-15"
            controlId="wd-verify-password"
          >
            <FormControl
              type="password"
              placeholder="verify password"
              defaultValue={"Preethi"}
            />
          </FormGroup>
          <Link href="Profile" className="text-white ">
            <Button
              variant="primary"
              id="wd-signup-btn"
              className="text-nowrap float-end account-btns"
            >
              Sign Up
            </Button>
          </Link>
        </Col>
      </Row>

      <Link href="Signin" className="wd-signup-link">
        Sign In
      </Link>
    </div>
  );
}
