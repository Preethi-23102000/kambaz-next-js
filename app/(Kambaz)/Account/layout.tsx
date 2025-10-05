import { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import AccountNavigation from "./Navigation";
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <Row>
        <Col className="d-none d-sm-block" sm={2}>
          <AccountNavigation />
        </Col>
        <Col sm={10}>{children}</Col>
      </Row>
    </div>
  );
}
