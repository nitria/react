import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import SingleUser from "./pages/singleUser/SingleUser";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import NewProduct from "./pages/newProduct/NewProduct";
import "./assets/css/main.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [expandSidebar, setExpandSidebar] = useState(false);
  const expandsidebar = () => {
    setExpandSidebar(!expandSidebar);
  };
  return (
    <Router>
      <div className={darkMode ? "app dark" : "app light"}>
        <Header
          expandSidebar={expandSidebar}
          setExpandSidebar={setExpandSidebar}
          expandsidebar={expandsidebar}
        />
        <Container fluid>
          <Row>
            <SideBar
              expandsidebar={expandsidebar}
              expandSidebar={expandSidebar}
              setExpandSidebar={setExpandSidebar}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <Col xs={12} className="p-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/:userId" element={<SingleUser />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:productsId"
                  element={<SingleProduct />}
                />
                <Route path="/newproducts" element={<NewProduct />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
