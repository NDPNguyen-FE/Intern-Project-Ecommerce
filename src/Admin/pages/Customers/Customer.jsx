import React from "react";
import { useSelector } from "react-redux";
import { Space, Table } from "antd";
import "./Customer.scss";

const { Column } = Table;

function Customer() {
  const { users } = useSelector((state) => state.customer);

  const columns = [
    {
      title: "ID",
      width: 100,
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      width: 100,
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      width: 100,
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      width: 100,
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      width: 100,
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      width: 100,
      dataIndex: "isAdmin",
      key: "isAdmin",
      render: (text) => (text ? "Admin" : "User"),
    },
  ];

  return (
    <div className='table'>
      <Table dataSource={users} columns={columns} rowKey='id'></Table>
    </div>
  );
}

export default Customer;
