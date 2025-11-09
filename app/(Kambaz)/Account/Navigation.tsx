"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  return (
    <ListGroup id="wd-account-navigation" className="wd-2 list-group rounded-0">
      {links.map((link) => (
        <ListGroupItem
          key={link}
          as={Link}
          href={link}
          className={`border-0 ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
          id={`wd-${link.toLowerCase()}-link`}
        >
          {link}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
