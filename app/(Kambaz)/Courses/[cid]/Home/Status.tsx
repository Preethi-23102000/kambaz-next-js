"use client";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { IoIosNotifications } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function CourseStatus() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser && currentUser.role === "FACULTY";
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex margin-bottom-15">
        <div className="w-50 pe-1">
          {isFaculty && (
            <Button
              variant="secondary"
              size="lg"
              className="w-100 text-nowrap "
            >
              <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
            </Button>
          )}
        </div>
        <div className="w-50">
          {isFaculty && (
            <Button variant="success" size="lg" className="w-100 text-nowrap ">
              <FaCheckCircle className="me-2 fs-5" /> Publish
            </Button>
          )}
        </div>
      </div>
      {isFaculty && (
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content
        </Button>
      )}
      {isFaculty && (
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
        </Button>
      )}

      {isFaculty && (
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <IoMdHome className="me-2 fs-5" /> Choose Home Page
        </Button>
      )}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <RiBarChart2Fill className="me-2 fs-5" /> View Course Stream
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" /> New Announcements
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <RiBarChart2Fill className="me-2 fs-5" /> New Analytics
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoIosNotifications className="me-2 fs-5" /> View Course Notifications
      </Button>
    </div>
  );
}
