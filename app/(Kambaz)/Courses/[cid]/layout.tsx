"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { RootState } from "../../store";
import RouteGuard from "./RouteGuarde";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  const [showNav, setShowNav] = useState(true);

  return (
    <RouteGuard>
      <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify
            className="me-4 fs-4 mb-1 cursor-pointer"
            style={{ cursor: "pointer" }}
            onClick={() => setShowNav(!showNav)} // toggle sidebar
            title={showNav ? "Hide Navigation" : "Show Navigation"}
          />
          <Breadcrumb course={course} />
        </h2>
        <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            {/* <CourseNavigation /> */}
            {showNav && (
              <div className="d-none d-md-block">
                <CourseNavigation />
              </div>
            )}
          </div>
          <div className="flex-fill">{children}</div>
        </div>
      </div>
    </RouteGuard>
  );
}
