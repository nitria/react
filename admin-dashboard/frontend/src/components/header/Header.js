import { Container, Row, Col } from "react-bootstrap";
import { Bell, ChatRightDots, List } from "react-bootstrap-icons";
import avatar1 from "../../assets/images/avatar1.webp";
import "./header.scss";

export default function Header({ expandsidebar }) {
  return (
    <header className="header">
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center">
          <Col xs={4} className="logo">
            <div className="hamburger-container">
              <List
                className="hamburger-icon"
                onClick={() => expandsidebar()}
              />
            </div>
            <h3>Nitria</h3>
          </Col>
          <Col xs={8} className="user-info">
            <div className="me-4 notification-container" title={"message"}>
              <ChatRightDots className="message-icon" />
              <span className="notification-number">2</span>
            </div>
            <div
              className="me-4 notification-container"
              title={"notifications"}
            >
              <Bell className="notification-icon" />
              <span className="notification-number">2</span>
            </div>
            <div className="me-4 avatar-container" title={"avatar1"}>
              <img src={avatar1} alt="avatar1" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
