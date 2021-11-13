import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { rowData } from "../../dummyData";
import { TrashFill } from "react-bootstrap-icons";
import "./userList.scss";
import avatar1 from "../../assets/images/avatar1.webp";
import avatar2 from "../../assets/images/avatar2.webp";

export default function UserList() {
  const [data, setData] = useState(rowData);
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

  const userListImg = (params) => {
    return `<div>
        <img
          alt=""
          class="userListImg"
          src=${params.data.Avatar === "avatar1" ? avatar1 : avatar2}
        />
      </div>`;
  };

  function BtnCellRenderer(params) {
    return (
      <div className="actionBtns-container">
        <Link to={"/users/" + params.data.id} className="editBtn">
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
          <div
            className="userList ag-theme-alpine"
            style={{ height: "max-content" }}
          >
            <Link to="/newuser">
              <button className="singleUserCreateBtn">Create</button>
            </Link>
            <AgGridReact
              rowData={data}
              onGridReady={onGridReady}
              suppressRowClickSelection={true}
              rowSelection="multiple"
              components={{
                userListImg: userListImg,
              }}
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
                field="Username"
                cellRenderer="userListImg"
                sortable={true}
                filter={true}
                width={100}
              ></AgGridColumn>
              <AgGridColumn
                field="Email"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="Status"
                sortable={true}
                filter={true}
                width={150}
              ></AgGridColumn>
              <AgGridColumn
                field="Transaction"
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
