import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HouseFill,
  GraphUp,
  GearFill,
  Person,
  ShopWindow,
  BarChartFill,
  CurrencyDollar,
  Envelope,
  ChatSquareFill,
  PersonCheckFill,
  BrightnessHighFill,
  MoonFill,
} from "react-bootstrap-icons";
import "./sideBar.scss";

export default function SideBar({ expandSidebar, darkMode, setDarkMode }) {
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    let listItems = document.querySelectorAll(".sidebar-list-item");

    function activeLink() {
      listItems.forEach((listItem) => {
        listItem.classList.remove("active");
        this.classList.add("active");
      });
    }
    listItems.forEach((listItem) => {
      listItem.addEventListener("click", activeLink);
    });
    return () => {
      listItems.forEach((listItem) => {
        listItem.addEventListener("click", activeLink);
      });
    };
  }, []);
  return (
    <aside className={expandSidebar ? "sideBar expand" : "sideBar"}>
      <Container className="p-0">
        <Row>
          <Col>
            <ul className="sidebar-list">
              <Link to="/" className="link">
                <li className="sidebar-list-item ">
                  <div className="sidebar-icons-container">
                    <HouseFill className="sidebar-icons" />
                  </div>
                  <span>Home</span>
                </li>
              </Link>
              <li className="sidebar-list-item">
                <div className="sidebar-icons-container">
                  <GraphUp className="sidebar-icons" />
                </div>
                <span>Analytics</span>
              </li>
              <li className="sidebar-list-item">
                <div className="sidebar-icons-container">
                  <GearFill className="sidebar-icons" />
                </div>
                <span>Settings</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="sidebar-list">
              <Link to="/users" className="link">
                <li className="sidebar-list-item ">
                  <div className="sidebar-icons-container">
                    <Person className="sidebar-icons" />
                  </div>
                  <span>Users</span>
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="sidebar-list-item">
                  <div className="sidebar-icons-container">
                    <ShopWindow className="sidebar-icons" />
                  </div>
                  <span>Products</span>
                </li>
              </Link>
              <li className="sidebar-list-item">
                <div className="sidebar-icons-container">
                  <BarChartFill className="sidebar-icons" />
                </div>
                <span>Reports</span>
              </li>
              <li className="sidebar-list-item">
                <div className="sidebar-icons-container">
                  <CurrencyDollar className="sidebar-icons" />
                </div>
                <span>Transactions</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="sidebar-list">
              <li className="sidebar-list-item ">
                <div className="sidebar-icons-container">
                  <Envelope className="sidebar-icons" />
                </div>
                <span>Mail</span>
              </li>
              <li className="sidebar-list-item">
                <div className="sidebar-icons-container">
                  <ChatSquareFill className="sidebar-icons" />
                </div>
                <span>Messages</span>
              </li>
              <li className="sidebar-list-item">
                <div className="sidebar-icons-container">
                  <PersonCheckFill className="sidebar-icons" />
                </div>
                <span>Feedback</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="sidebar-title">Theme</h5>
            <ul className="sidebar-list">
              <li className="sidebar-list-item " onClick={toggleMode}>
                {darkMode ? (
                  <BrightnessHighFill className="sidebar-icons" />
                ) : (
                  <MoonFill className="sidebar-icons" />
                )}
              </li>
              <li>
                <button>
                  <span>Default</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Blue</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Red</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Orange</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Green</span>
                </button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </aside>
  );
}
