"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";

import * as client from "../client";

import {
  FormControl,
  FormGroup,
  Button,
  Row,
  Col,
  InputGroup,
  FormSelect,
} from "react-bootstrap";
import { RootState, persistor } from "../../store";

const today = () => {
  const now = new Date();
  return now.toISOString().split("T")[0];
};

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const fetchProfile = () => {
    if (!currentUser) return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  // const signout = () => {
  //   dispatch(setCurrentUser(null));
  //   persistor.purge();
  //   redirect("/Account/Signin");
  // };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <Row>
            <Col md={6}>
              <FormGroup
                className="mb-3 margin-bottom-15"
                controlId="wd-username"
              >
                <FormControl
                  id="wd-username"
                  className="mb-2"
                  defaultValue={profile.username}
                  title="Username"
                  placeholder="Username"
                  onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup
                className="mb-3 margin-bottom-15"
                controlId="wd-password"
              >
                <FormControl
                  id="wd-password"
                  className="mb-2"
                  title="Password"
                  placeholder="Password"
                  defaultValue={profile.password}
                  onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup
                className="mb-3 margin-bottom-15"
                controlId="wd-firstname"
              >
                <FormControl
                  id="wd-firstname"
                  className="mb-2"
                  defaultValue={profile.firstName}
                  title="First Name"
                  placeholder="First Name"
                  onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup
                className="mb-3 margin-bottom-15"
                controlId="wd-lastname"
              >
                <FormControl
                  id="wd-lastname"
                  title="Last Name"
                  placeholder="Last Name"
                  className="mb-2"
                  defaultValue={profile.lastName}
                  onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
                />
              </FormGroup>

              <FormControl
                id="wd-dob"
                className="mb-2"
                type="date"
                title="Date of Birth"
                value={profile.dob ? profile.dob.substring(0, 10) : ""}
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })
                }
              />

              <FormGroup className="mb-3 margin-bottom-15" controlId="wd-email">
                <FormControl
                  id="wd-email"
                  className="mb-2"
                  title="Email"
                  placeholder="Email"
                  defaultValue={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </FormGroup>
              <select
                className="form-control mb-2"
                id="wd-role"
                title="Role"
                value={profile.role || "USER"}
                onChange={(e) =>
                  setProfile({ ...profile, role: e.target.value })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
              <button
                onClick={updateProfile}
                className="btn btn-primary w-100 mb-2"
              >
                Update
              </button>

              <Button
                onClick={signout}
                className="w-100 mb-2"
                id="wd-signout-btn"
              >
                Sign out
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
