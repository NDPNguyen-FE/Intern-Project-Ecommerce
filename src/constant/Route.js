import React from "react";

export const userRouter = [
  {
    path: "/",
    component: React.lazy(() => import("../User/pages/HomePage/HomePage")),
  },

  {
    path: "/product/:id",
    component: React.lazy(() =>
      import("../User/pages/ProductDetail/ProductDetail")
    ),
  },

  {
    path: "/products",
    component: React.lazy(() =>
      import("../User/pages/ProductShop/ProductShop")
    ),
  },

  {
    path: "/login",
    component: React.lazy(() => import("../User/pages/Login/Login.jsx")),
  },

  {
    path: "/register",
    component: React.lazy(() => import("../User/pages/Register/Register.jsx")),
  },
  {
    path: "/offer",
    component: React.lazy(() => import("../User/pages/Offer/Offer.jsx")),
  },

  {
    path: "/ordercomplete",
    component: React.lazy(() =>
      import("../User/pages/OrderComplete/OrderComplete.jsx")
    ),
  },

  {
    path: "/faq",
    component: React.lazy(() => import("../User/pages/FAQ/FAQ.jsx")),
  },

  {
    path: "/checkout",
    component: React.lazy(() => import("../User/pages/Checkout/Checkout")),
  },
];

export const adminRouter = [
  {
    path: "/admin",
    component: React.lazy(() => import("../Admin/pages/Dashboard/Dashboard")),
  },

  {
    path: "/admin/products",
    component: React.lazy(() => import("../Admin/pages/Products/ProductAdmin")),
  },

  {
    path: "/admin/customers",
    component: React.lazy(() => import("../Admin/pages/Customers/Customer")),
  },

  {
    path: "/admin/orders",
    component: React.lazy(() => import("../Admin/pages/Orders/OrderAdmin")),
  },
];
