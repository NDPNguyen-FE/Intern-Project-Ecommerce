import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideAdmin.scss";

function SideAdmin() {
  const [active, setActive] = useState("");

  const sideList = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Products",
      path: "/admin/products",
    },

    {
      name: "Order",
      path: "/admin/orders",
    },
    {
      name: "Customers",
      path: "/admin/customers",
    },
  ];

  const showSideBar = (sideList) => {
    return sideList.map((item, index) => {
      return (
        <Link
          className={`side-link ${active}`}
          to={item.path}
          key={index}
          onClick={() => setActive("active")}>
          {item.name}
        </Link>
      );
    });
  };

  return <div className='side-admin'>{showSideBar(sideList)}</div>;
}

export default SideAdmin;
