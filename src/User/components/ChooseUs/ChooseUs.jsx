import { Col, Divider, Row } from "antd";
import React from "react";
import {
  FaFlagCheckered,
  FaLeaf,
  FaShoppingBasket,
  FaUserFriends,
  FaUserShield,
  FaUtensils,
} from "react-icons/fa";
import ImageCriteria from "../../../assets/vegetable-market.png";
import "./ChooseUs.scss";

function ChooseUs() {
  return (
    <div className='choose'>
      <div className='choose-container'>
        <h3 className='choose-title'>why choose us</h3>
        <p>
          Veritable Vegetable supports organic farmers, increases access to
          fresh produce, and strengthens diverse communities. We create a
          healthier world through our essential work. Our unique, values-driven
          business model encourages political change, impacts food policy, and
          demonstrates a radically different approach to distributing organic
          produce.
        </p>

        <Divider />
        <Row>
          <Col span={7} className='choose-item'>
            <div className='choose-criteria'>
              <h3>
                {" "}
                <FaLeaf /> 100% Organic
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip, consectetur
                adipiscing elit
              </p>
            </div>

            <div className='choose-criteria'>
              <h3>
                {" "}
                <FaUserFriends /> Family heathy
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip, consectetur
                adipiscing elit
              </p>
            </div>

            <div className='choose-criteria'>
              <h3>
                <FaUtensils /> Alway Fresh
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip, consectetur
                adipiscing elit
              </p>
            </div>
          </Col>
          <Col span={10}>
            <div className='choose-criteria'>
              <img src={ImageCriteria} alt='market criteria'></img>
            </div>
          </Col>
          <Col span={7} className='choose-item'>
            <div className='choose-criteria'>
              <h3>
                <FaUserShield /> Safe Technology
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip, consectetur
                adipiscing elit
              </p>
            </div>

            <div className='choose-criteria'>
              <h3>
                <FaShoppingBasket /> Harvest Everyday
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip, consectetur
                adipiscing elit
              </p>
            </div>

            <div className='choose-criteria'>
              <h3>
                <FaFlagCheckered /> Closed Process
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip, consectetur
                adipiscing elit
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ChooseUs;
