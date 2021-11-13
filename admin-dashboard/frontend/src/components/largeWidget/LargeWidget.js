import React from "react";
import { Table } from "react-bootstrap";
import avatar1 from "../../assets/images/avatar1.webp";
import avatar2 from "../../assets/images/avatar2.webp";
import "./largeWidget.scss";

export default function LargeWidget() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <Table className="widgetLargeTable" responsive>
        <thead>
          <tr>
            <th className="widgetLargeTitle">Customer</th>
            <th className="widgetLargeTitle">Date</th>
            <th className="widgetLargeTitle">Amount</th>
            <th className="widgetLargeTitle">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="widgetLargeUser">
              <img src={avatar1} alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Susan Carol</span>
            </td>
            <td className="widgetLargeDate">2 Jun 2021</td>
            <td className="widgetLargeAmount">$150</td>
            <td className="widgetLargeStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr>
            <td className="widgetLargeUser">
              <img src={avatar2} alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Ben Afleck</span>
            </td>
            <td className="widgetLargeDate">2 Jun 2021</td>
            <td className="widgetLargeAmount">$150</td>
            <td className="widgetLargeStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr>
            <td className="widgetLargeUser">
              <img src={avatar1} alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Susan Carol</span>
            </td>
            <td className="widgetLargeDate">2 Jun 2021</td>
            <td className="widgetLargeAmount">$150</td>
            <td className="widgetLargeStatus">
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
