"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button, Row, Col } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Account/Profile");
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <Row className="margin-bottom-15">
        <Col md={6}>
          <FormControl
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="wd-username b-2 mb-2"
            placeholder="username"
          />
          <FormControl
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="wd-password mb-2"
            placeholder="password"
            type="password"
          />
          <button
            onClick={signup}
            className="wd-signup-btn btn btn-primary mb-2 w-100"
          >
            Sign up
          </button>
          <br />
          <Link href="/Account/Signin" className="wd-signin-link">
            Sign in
          </Link>
        </Col>
      </Row>
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import { FormControl, FormGroup, Button, Row, Col } from "react-bootstrap";
// export default function Signup() {
//   return (
//     <div id="wd-signup-screen">
//       <h3>Sign Up</h3>
//       <Row className="margin-bottom-15">
//         <Col md={6}>
//           <FormGroup className="mb-3 margin-bottom-15" controlId="wd-username">
//             <FormControl placeholder="username" defaultValue={"Preethi"} />
//           </FormGroup>
//           <FormGroup className="mb-3 margin-bottom-15" controlId="wd-password">
//             <FormControl
//               type="password"
//               placeholder="password"
//               defaultValue={"Preethi"}
//             />
//           </FormGroup>
//           <FormGroup
//             className="mb-3 margin-bottom-15"
//             controlId="wd-verify-password"
//           >
//             <FormControl
//               type="password"
//               placeholder="verify password"
//               defaultValue={"Preethi"}
//             />
//           </FormGroup>
//           <Link href="Profile" className="text-white ">
//             <Button
//               variant="primary"
//               id="wd-signup-btn"
//               className="text-nowrap float-end account-btns"
//             >
//               Sign Up
//             </Button>
//           </Link>
//         </Col>
//       </Row>

//       <Link href="Signin" className="wd-signup-link">
//         Sign In
//       </Link>
//     </div>
//   );
// }
