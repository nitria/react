import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../../components/charts/Charts";
import { productsData } from "../../dummyData";
import "./singleProduct.scss";
import xiaomi1 from "../../assets/images/xiaomi/xiaomi1.png";

export default function SingleProduct() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="singleProduct">
            <Container>
              <div className="singleProductTitleContainer">
                <h1 className="singleProductTitle">Edit Product</h1>
              </div>
              <Row>
                <Col>
                  <div className="singleProductTop">
                    <Container className="p-0">
                      <Row>
                        <Col lg={6}>
                          <div className="left">
                            <Chart
                              data={productsData}
                              dataKey={"Sales"}
                              title={"Sales Performance"}
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="right">
                            <div className="singleProductInfoTop">
                              <img
                                alt=""
                                src={xiaomi1}
                                className="singleProductImg"
                              />
                              <p className="singleProductName">Xiaomi</p>
                            </div>
                            <div className="singleProductInfoBottom">
                              <div className="singleProductInfoItem">
                                <span className="singleProductInfoKey">
                                  id:
                                </span>
                                <span className="singleProductInfoValue">
                                  123
                                </span>
                              </div>
                              <div className="singleProductInfoItem">
                                <span className="singleProductInfoKey">
                                  sales:
                                </span>
                                <span className="singleProductInfoValue">
                                  1234
                                </span>
                              </div>
                              <div className="singleProductInfoItem">
                                <span className="singleProductInfoKey">
                                  active:
                                </span>
                                <span className="singleProductInfoValue">
                                  yes
                                </span>
                              </div>
                              <div className="singleProductInfoItem">
                                <span className="singleProductInfoKey">
                                  in stock:
                                </span>
                                <span className="singleProductInfoValue">
                                  no
                                </span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="singleProductBottom">
                    <form action="" className="singleProductForm">
                      <div className="singleProductFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Product" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="singleProductFormRight">
                        <div className="singleProductUpload">
                          <img
                            src={xiaomi1}
                            alt=""
                            className="singleProductUploadImg"
                          />
                          <input type="file" />
                        </div>
                        <button className="singleProductUpdateBtn">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
