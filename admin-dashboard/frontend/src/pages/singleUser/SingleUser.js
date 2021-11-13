import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar1 from "../../assets/images/avatar1.webp";
import {
  Calendar,
  Person,
  Phone,
  Envelope,
  GeoAlt,
} from "react-bootstrap-icons";
import "./singleUser.scss";

export default function SingleUser() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="singleUser">
            <Container className="p-1">
              <Row>
                <Col>
                  <div className="singleUserTitleContainer">
                    <h1 className="singleUserTitle">Edit User</h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="singleUserContainer">
                  <Container className="p-1">
                    <Row>
                      <Col lg={4} className="my-2">
                        <div className="singleUserShow">
                          <div className="singleUserTop">
                            <img src={avatar1} alt="" />
                            <div className="singleUserDescription">
                              <h2 className="singleUserName">Rebecca Smith</h2>
                              <p className="singleUserJob">
                                Frontend Developer
                              </p>
                            </div>
                          </div>
                          <div className="singleUserBottom">
                            <h2 className="singleUseAccountTitle">
                              Account Details
                            </h2>
                            <div className="singleUserDetails">
                              <div className="singleUserInfo">
                                <Person className="singleUserIcon" />
                                <p>ReSmith</p>
                              </div>
                              <div className="singleUserInfo">
                                <Calendar className="singleUserIcon" />
                                <p>15/08/1990</p>
                              </div>
                              <h2 className="singleUseAccountTitle">
                                Contact Details
                              </h2>
                              <div className="singleUserInfo">
                                <Phone className="singleUserIcon" />
                                <p>123465789</p>
                              </div>
                              <div className="singleUserInfo">
                                <Envelope className="singleUserIcon" />
                                <p>resmith@email.com</p>
                              </div>
                              <div className="singleUserInfo">
                                <GeoAlt className="singleUserIcon" />
                                <p>Xanthi, Greece</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={8} className="my-2">
                        <div className="singleUserUpdate">
                          <h1 className="singleUserTitle">Edit</h1>
                          <form className="singleUserForm" action="">
                            <div className="singleUserLeft">
                              <div className="singleUserItem">
                                <label> Username</label>
                                <input
                                  type="text"
                                  placeholder="Name"
                                  className="singleUserItemName"
                                />
                              </div>
                              <div className="singleUserItem">
                                <label> Full Name</label>
                                <input
                                  type="text"
                                  placeholder="Full Name"
                                  className="singleUserItemName"
                                />
                              </div>
                              <div className="singleUserItem">
                                <label> Email</label>
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="singleUserItemName"
                                />
                              </div>
                              <div className="singleUserItem">
                                <label> Phone</label>
                                <input
                                  type="text"
                                  placeholder="Phone"
                                  className="singleUserItemName"
                                />
                              </div>
                              <div className="singleUserItem">
                                <label> Address</label>
                                <input
                                  type="text"
                                  placeholder="Address"
                                  className="singleUserItemName"
                                />
                              </div>
                            </div>
                            <div className="singleUserRight">
                              <div className="singleUserUpload">
                                <img
                                  src={avatar1}
                                  alt=""
                                  className="singleUserUploadImg"
                                />
                                <input type="file" />
                              </div>
                              <button className="singleUserUpdateBtn">
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
