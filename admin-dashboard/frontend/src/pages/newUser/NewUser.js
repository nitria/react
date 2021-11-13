import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./newUser.scss";

export default function NewUser() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
              <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="Username" className="" />
              </div>
              <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" className="" />
              </div>
              <div className="newUserItem">
                <label>Email</label>
                <input type="text" placeholder="Email" className="" />
              </div>
              <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="Password" className="" />
              </div>
              <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="Address" className="" />
              </div>
              <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="Phone" className="" />
              </div>
              <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="Male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label htmlFor="Female">Female</label>
                </div>
              </div>
              <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="newUserItem">
                <button className="newUserBtn">Create</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
