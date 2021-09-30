import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const customerList = [
    {
      path: "/",
      name: "Contact us",
    },
    {
      path: "/",
      name: "Help and advice",
    },
    {
      path: "/",
      name: "Shipping & Returns",
    },
    {
      path: "/",
      name: "Terms and conditions",
    },
    {
      path: "/",
      name: "Refund Policy",
    },
  ];

  const inforList = [
    {
      path: "/",
      name: "About Us",
    },
    {
      path: "/",
      name: "Testimonials",
    },
    {
      path: "/",
      name: "My Account",
    },
    {
      path: "/",
      name: "Payments & Returns",
    },
    {
      path: "/",
      name: "View Catalogues Online",
    },
  ];

  const aboutList = [
    {
      path: "/",
      name: "Who We Are ?",
    },
    {
      path: "/",
      name: "Corporate Responsibility",
    },
    {
      path: "/",
      name: "California Laws",
    },
    {
      path: "/",
      name: "Careers",
    },
    {
      path: "/",
      name: "Privacy Policy",
    },
  ];

  const contactList = [
    {
      path: "/",
      name: "(+612) 2531 5600",
    },
    {
      path: "/",
      name: "support@domain.com",
    },
    {
      path: "/",
      name: "PO Box 1622 Vissaosang Street West",
    },
    {
      path: "/",
      name: "Opening Hours : 8.00AM - 21.00AM",
    },
  ];

  const showDataFooter = (data) => {
    return data.map((item, index) => {
      return (
        <li className='footer-item' key={index}>
          <Link to={item.path} className='footer-link'>
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-subc'>
          <h3>
            {" "}
            <FaMailBulk /> SIGN UP FOR NEWSLETTERS
          </h3>
          <form className='footer-form'>
            <input type='text' placeholder='ENTER YOUR MAIL' />
            <button>Subcribe</button>
          </form>
        </div>
        <ul className='footer-list'>
          <h3 className='footer-title'>customer service</h3>
          {showDataFooter(customerList)}
        </ul>
        <ul className='footer-list'>
          <h3 className='footer-title'>information</h3>
          {showDataFooter(inforList)}
        </ul>
        <ul className='footer-list'>
          <h3 className='footer-title'>about us</h3>
          {showDataFooter(aboutList)}
        </ul>
        <ul className='footer-list'>
          <h3 className='footer-title'>contact us</h3>
          {showDataFooter(contactList)}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
