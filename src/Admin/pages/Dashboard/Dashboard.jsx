import { CaretUpOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.scss";

function Dashboard() {
  const dispatch = useDispatch();
  const [revenue, setRevenue] = useState(0);

  const { allProducts } = useSelector((state) => state.products);

  const { users } = useSelector((state) => state.customer);

  const { orderList } = useSelector((state) => state.order);

  const data = [
    {
      title: "Total Orders",
      count: `${orderList.length} Orders`,
      status: "Orders Up (previous 30 days)",
      path: "/admin/orders",
    },
    {
      title: "Total Products",
      count: `${allProducts.length} Products`,
      status: "Products Up (previous 30 days)",
      path: "/admin/products",
    },
    {
      title: "Total Customers",
      count: `${users.length} Customers`,
      status: "Customers Up (previous 30 days)",
      path: "/admin/customers",
    },
    {
      title: "Total Revenue",
      count: `$${revenue.toFixed(2)}`,
      status: "Revenue Up (previous 30 days)",
      path: "/admin",
    },
  ];

  const dataChart = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const showData = (data) => {
    return data.map((item, index) => {
      return (
        <Col span={5} className='dashboard-column' key={index}>
          <h3 className='dashboard-title'>{item.title}</h3>
          <p className='dashboard-sub'>(Last 30 Days)</p>

          <h3 className='dashboard-count'>{item.count}</h3>
          <p className='dashboard-status'>
            <CaretUpOutlined /> {item.status}
          </p>

          <Link to={item.path} className='dashboard-link'>
            Full Detail
          </Link>
        </Col>
      );
    });
  };

  return (
    <>
      <Row className='dashboard' align='center'>
        {showData(data)}
      </Row>

      <ResponsiveContainer width='50%' height='50%'>
        <AreaChart
          width={200}
          height={200}
          data={dataChart}
          margin={{
            top: 10,
            right: 30,
            left: 70,
            bottom: 0,
          }}
          title='Order Chart'>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name'>
            <Label value='Name' offset={0} position='insideBottom' />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default Dashboard;
