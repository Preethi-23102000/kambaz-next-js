"use client";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";
import Link from "next/link";
import { FormControl, FormGroup, Button, Row, Col } from "react-bootstrap";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [correctCredential, setCorrectCredentials] = useState(true);
  const dispatch = useDispatch();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>

      <Row className="margin-bottom-15">
        <Col md={6}>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-username">
            <FormControl
              defaultValue={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="mb-2"
              placeholder="username"
              id="wd-username"
            />
          </FormGroup>
          <FormGroup className="mb-3 margin-bottom-15" controlId="wd-password">
            <FormControl
              defaultValue={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="mb-2"
              placeholder="password"
              type="password"
              id="wd-password"
            />
          </FormGroup>
          <Button onClick={signin} id="wd-signin-btn" className="w-100">
            Sign in
          </Button>
        </Col>
      </Row>

      <Link href="Signup" className="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
