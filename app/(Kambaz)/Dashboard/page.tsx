"use client";
import { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as client from "../Courses/client";

import { setCourses } from "../Courses/reducer";
import {
  setEnrollments,
  addEnrollment,
  removeEnrollment,
} from "../Enrollments/reducer";

import Link from "next/link";

import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "react-bootstrap";
import { RootState } from "../store";

export default function Dashboard() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "New Start date ( YYYY-MM-DD )",
    endDate: "New End date ( YYYY-MM-DD )",
    department: "Course Department",
    credits: 4,
    description: "New Description",
    image: "/images/reactjs.jpg",
  });

  const fetchCourses = async () => {
    try {
      let courses;
      if (showAllCourses) {
        // Fetch ALL courses from the database
        courses = await client.fetchAllCourses();
      } else {
        // Fetch only user's enrolled courses
        courses = await client.findMyCourses();
      }
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await client.getMyEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
      fetchEnrollments();
    }
  }, [currentUser, showAllCourses]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  // Function to handle enroll/unenroll
  const handleEnrollment = async (courseId: string, enroll: boolean) => {
    if (!currentUser) return;

    try {
      if (enroll) {
        const enrollment = await client.enrollInCourse(courseId);
        dispatch(addEnrollment(enrollment));
      } else {
        await client.unenrollFromCourse(courseId);
        dispatch(removeEnrollment({ userId: currentUser._id, courseId }));
      }
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  const displayedCourses = courses;

  const handleToggle = () => {
    setShowAllCourses(!showAllCourses);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser && (
        <Button variant="primary" onClick={handleToggle} className="mb-3">
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </Button>
      )}
      <hr />
      {isFaculty && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end mb-2"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />

          <FormControl
            value={course.name}
            className="mb-2"
            title="Course Name"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.number}
            title="Course Number"
            placeholder="Course Number"
            className="mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <FormControl
            type="date"
            title="Course Start Date"
            value={course.startDate || new Date().toISOString().split("T")[0]}
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
            max={course.endDate || undefined}
          />
          <FormControl
            type="date"
            title="Course End Date"
            value={
              course.endDate ||
              new Date(Date.now() + 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0]
            }
            className="mb-2"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
            min={course.startDate || new Date().toISOString().split("T")[0]}
          />
          <FormControl
            value={course.department}
            title="Course Department"
            placeholder="Course Department"
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, department: e.target.value })
            }
          />
          <FormControl
            type="number"
            value={course.credits}
            title="Course Credits"
            placeholder="Course Credits"
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, credits: parseInt(e.target.value) })
            }
          />
          <FormControl
            as="textarea"
            value={course.description}
            title="Course Description"
            placeholder="Course Description"
            rows={3}
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
          </h2>
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        {showAllCourses
          ? `All Courses (${courses.length})`
          : `My Courses (${displayedCourses.length})`}
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Row xs={1} md={5} className="g-4">
            {!currentUser ? (
              // When user is not logged in
              <Col className="text-center mt-5">
                <h3>Please log in to view courses</h3>
                <p className="text-muted">
                  You need to be logged in to see courses.
                </p>
              </Col>
            ) : displayedCourses.length === 0 ? (
              // When user is logged in but no courses to show
              <Col className="text-center mt-5">
                <h3>No courses available</h3>
                <p className="text-muted">
                  {showAllCourses
                    ? "No courses found."
                    : "You are not enrolled in any courses."}
                </p>
              </Col>
            ) : (
              // When there are courses to display
              displayedCourses.map((course: any) => (
                <Col
                  key={course._id}
                  className="wd-dashboard-course"
                  style={{ width: "300px" }}
                >
                  <Card>
                    <Link
                      href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <CardImg
                        src={course.image}
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <CardBody className="card-body">
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}
                        </CardTitle>
                        <CardText
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}
                        </CardText>
                        <Button variant="primary">Go</Button>

                        {/* Faculty Edit/Delete Buttons */}
                        {isFaculty && !showAllCourses && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                onDeleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </CardBody>
                    </Link>

                    {/* Enrollment Buttons */}
                    {showAllCourses && currentUser.role !== "FACULTY" && (
                      <CardBody className="pt-0">
                        {isEnrolled(course._id) ? (
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleEnrollment(course._id, false)}
                            className="w-100"
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            size="sm"
                            onClick={() => handleEnrollment(course._id, true)}
                            className="w-100"
                          >
                            Enroll
                          </Button>
                        )}
                      </CardBody>
                    )}
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </div>
      </div>
    </div>
  );
}
