import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderAdmin from "../Admin/components/HeaderAdmin/HeaderAdmin";
import SideAdmin from "../Admin/components/Sider/SideAdmin";
import { getCustomers } from "../redux/thunk/customer.thunk";
import { getAllOrders } from "../redux/thunk/order.thunk";
import { getAllProducts, getProductFilter } from "../redux/thunk/product.thunk";

function AdminLayout({ children }) {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCustomers());
    dispatch(getAllOrders());
  }, []);

  useEffect(() => {
    dispatch(getProductFilter(filter));
  }, [filter]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "white" }}>
        <HeaderAdmin />
      </Header>
      <Layout style={{ flexDirection: "row" }}>
        <Sider style={{ backgroundColor: "white" }} width='270'>
          <SideAdmin />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
