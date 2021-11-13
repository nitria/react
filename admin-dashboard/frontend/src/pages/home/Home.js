import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import Charts from "../../components/charts/Charts";
import { userData } from "../../dummyData";
import "./home.scss";
import SmallWidget from "../../components/smallWidget/SmallWidget";
import LargeWidget from "../../components/largeWidget/LargeWidget";

export default function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <FeaturedInfo />
          </Col>
        </Row>
        <Row>
          <Col>
            <Charts
              data={userData}
              title="User Analytics"
              grid
              dataKey="Active User"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="homeWidgets">
              <Container>
                <Row>
                  <Col lg={4}>
                    <SmallWidget />
                  </Col>
                  <Col lg={8}>
                    <LargeWidget />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
