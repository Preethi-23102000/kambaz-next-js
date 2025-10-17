import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { GoBeaker } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 d-flex flex-column align-item-center justify-content-start"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <div className="nav-icons">
            <FaRegCircleUser className="fs-1 text-white" />
            Account
          </div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-white text-center">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none"
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          Dashboard
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0  bg-black text-center">
        <Link
          href="/Dashboard"
          id="wd-courses-link"
          className="text-danger text-decoration-none"
        >
          <div className="nav-icons">
            <LiaBookSolid className="fs-1 text-danger" />
            Courses
          </div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Calender"
          id="wd-calender-link"
          className="text-danger text-decoration-none"
        >
          <div className="nav-icons">
            <IoCalendarOutline className="fs-1 text-danger" />
            Calender
          </div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className="text-danger text-decoration-none"
        >
          <div className="nav-icons">
            <FaInbox className="fs-1 text-danger" />
            Inbox
          </div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-danger text-decoration-none"
        >
          <div className="nav-icons">
            <GoBeaker className="fs-1 text-danger" />
            Labs
          </div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center ">
        <Link
          href="https://github.com/Preethi-23102000/kambaz-next-js"
          id="wd-github"
          className="text-danger text-decoration-none"
        >
          <div className="nav-icons">
            <FaGithub className="fs-1 text-danger " />
            My Github
          </div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
