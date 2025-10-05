"use client";
import Link from "next/link";
import { FormControl, FormGroup, Button, Row, Col } from "react-bootstrap";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <Row className="margin-bottom-15">
        <Col md={6}>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-username">
            <FormControl placeholder="username" />
          </FormGroup>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-password">
            <FormControl type="password" placeholder="password" />
          </FormGroup>
          <Link href="Signin" className="text-white">
            <Button
              variant="primary"
              id="wd-signin-btn"
              className="text-nowrap float-end account-btns"
            >
              Sign In
            </Button>
          </Link>
        </Col>
      </Row>

      <Link href="Signup" className="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
