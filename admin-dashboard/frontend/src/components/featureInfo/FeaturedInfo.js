import React from "react";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import "./featuredInfo.scss";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <Container>
        <Row>
          <Col md={4}>
            <div className="featuredItem">
              <span className="featuredTitle">Revenue</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2.000</span>
                <span className="featuredRate">
                  -11.4
                  <ArrowDown color="red" fontSize="14px" />
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="featuredItem">
              <span className="featuredTitle">Sales</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$6.000</span>
                <span className="featuredRate">
                  -1.4
                  <ArrowDown color="red" fontSize="14px" />
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="featuredItem">
              <span className="featuredTitle">Cost</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2.500</span>
                <span className="featuredRate">
                  +3.3
                  <ArrowUp color="green" fontSize="14px" />
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
