import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderComplete.scss";

function OrderComplete() {
  return (
    <div className='order-complete'>
      <div className='result-complete'>
        <Result
          status='success'
          title='Your order is successfully'
          subTitle='Thank you for your purchase. Have a nice time'
          extra={[
            <Link to='/'>
              <Button key='buy'>Buy Again</Button>
            </Link>,
          ]}
        />
      </div>
    </div>
  );
}

export default OrderComplete;
