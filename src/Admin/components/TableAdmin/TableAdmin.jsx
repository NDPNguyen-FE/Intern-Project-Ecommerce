import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductById } from "../../../redux/thunk/product.thunk";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import "./TableAdmin.scss";

function TableAdmin() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [productItem, setProductItem] = useState(null);
  const { filterProduct } = useSelector((state) => state.products);

  const handleOpenModal = (products) => {
    setProductItem(products);
    setVisible(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProductById(id));
  };

  const columns = [
    {
      title: "ID",
      width: 100,
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name Product",
      width: 100,
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      width: 100,
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Weight",
      width: 100,
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Price",
      width: 100,
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Type",
      width: 100,
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      width: 100,
      key: "action",
      render: (record) => (
        <>
          <Space size='middle'>
            <EditOutlined
              onClick={() => {
                handleOpenModal(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                handleDelete(record.id);
              }}
            />

            {productItem && (
              <Space>
                <UpdateProduct
                  visible={visible}
                  setVisible={setVisible}
                  product={productItem}
                />
              </Space>
            )}
          </Space>
        </>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={filterProduct}
      pagination={false}></Table>
  );
}

export default TableAdmin;
