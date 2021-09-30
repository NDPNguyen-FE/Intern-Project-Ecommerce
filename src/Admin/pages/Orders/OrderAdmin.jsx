import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./OrderAdmin.scss";

const { Column } = Table;

function OrderAdmin() {
  const dispatch = useDispatch();
  const { orderList } = useSelector((state) => state.order);
  const [order, setOrder] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ID User",
      dataIndex: "idUser",
      key: "idUser",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Customer Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Amount ($)",
      dataIndex: "totalPayment",
      key: "totalPayment",
    },
    {
      title: "Contact Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Payment Method",
      dataIndex: "payment",
      key: "payment",
    },
  ];

  useEffect(() => {
    setOrder(orderList);
  }, [dispatch, orderList]);

  return (
    <div className='table'>
      <Table dataSource={order} columns={columns}></Table>
    </div>
  );
}

export default OrderAdmin;
