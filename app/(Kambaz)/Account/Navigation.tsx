"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function AccountNavigation() {
  const pathname = usePathname();

  const links = [
    { label: "Signin", path: "Signin" },
    { label: "Signup", path: "Signup" },
    { label: "Profile", path: "Profile" },
  ];

  return (
    <ListGroup id="wd-account-navigation" className="wd-2 list-group rounded-0">
      {links.map((link) => (
        <ListGroupItem
          key={link.path}
          as={Link}
          href={link.path}
          className={`border-0 ${
            pathname.includes(link.label) ? "active" : "text-danger"
          }`}
          id={`wd-${link.label.toLowerCase()}-link`}
        >
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

// import Link from "next/link";
// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation" className="wd-2 list-group rounded-0 ">
//       <Link
//         href="Signin"
//         id="wd-signin-link"
//         className="list-group-item active border-0"
//       >
//         Signin
//       </Link>
//       <Link
//         href="Signup"
//         id="wd-signup-link"
//         className="list-group-item text-danger border-0"
//       >
//         Signup
//       </Link>
//       <Link
//         href="Profile"
//         id="wd-profile-link"
//         className="list-group-item text-danger border-0"
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }
