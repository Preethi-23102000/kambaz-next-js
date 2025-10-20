"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <div id="wd-courses-navigation">
      <ListGroup className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
          <ListGroupItem
            key={link}
            as={Link}
            href={`${
              link === "People"
                ? `/Courses/${cid}/${link}/Table`
                : `/Courses/${cid}/${link}`
            }`}
            className={`list-group-item 
              ${pathname.includes(link) ? "active" : "text-danger"} border-0`}
          >
            {link}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
