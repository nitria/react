import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Container, Row, Col } from "react-bootstrap";
import "./products.scss";
import { productsList } from "../../dummyData";
import { TrashFill } from "react-bootstrap-icons";

export default function Products() {
  const [data, setData] = useState(productsList);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const handleDelete = (params) => {
    params.api.applyTransaction({
      remove: [params.node.data],
    });
  };

  const productImg = (params) => {
    console.log(params.data);
    const { img } = params.data;
    return `<div>
    <img src=${img} alt="" class="productImg"/>
      </div>`;
  };

  function BtnCellRenderer(params) {
    return (
      <div className="actionBtns-container">
        <Link to={"/products/" + params.data.id} className="editBtn">
          Edit
        </Link>
        <button className="deleteBtn" onClick={() => handleDelete(params)}>
          <TrashFill style={{ color: "red" }} />
        </button>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="products ag-theme-alpine" style={{ height: "100vh" }}>
            <Link to="/newproducts">
              <button className="singleProductCreateBtn">Create</button>
            </Link>
            <AgGridReact
              height={80}
              rowData={data}
              onGridReady={onGridReady}
              suppressRowClickSelection={true}
              rowSelection="multiple"
              components={{ productImg: productImg }}
              frameworkComponents={{ BtnCellRenderer: BtnCellRenderer }}
            >
              <AgGridColumn
                field="id"
                sortable={true}
                filter={true}
                checkboxSelection={true}
                width={100}
              ></AgGridColumn>
              <AgGridColumn
                field="Image"
                cellRenderer="productImg"
                sortable={true}
                filter={true}
                width={100}
              ></AgGridColumn>
              <AgGridColumn
                field="Name"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="Stock"
                sortable={true}
                filter={true}
                width={100}
              ></AgGridColumn>
              <AgGridColumn
                field="Status"
                sortable={true}
                filter={true}
                width={150}
              ></AgGridColumn>
              <AgGridColumn
                field="Price"
                sortable={true}
                filter={true}
                width={150}
              ></AgGridColumn>
              <AgGridColumn
                field="Action"
                sortable={true}
                filter={true}
                width={100}
                cellRenderer="BtnCellRenderer"
              ></AgGridColumn>
            </AgGridReact>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
