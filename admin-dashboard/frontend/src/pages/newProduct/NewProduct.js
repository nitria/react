import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./newProduct.scss";

export default function NewProduct() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form action="" className="newProductForm">
              <div className="newProductItem">
                <label>Product</label>
                <input type="file" id="file" />
              </div>
              <div className="newProductItem">
                <label>Name</label>
                <input type="text" placeholder="Product" />
              </div>
              <div className="newProductItem">
                <label>Stock</label>
                <input type="text" placeholder="1322" />
              </div>
              <div className="newProductItem">
                <label>Active</label>
                <select className="newProductSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <button className="newProductBtn">Create</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
