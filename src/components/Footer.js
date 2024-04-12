import React from "react";
import { Link } from "react-router-dom";
import { TfiFacebook, TfiInstagram, TfiTwitter } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex ml-5">
          <li className="ms-3">
            <Link className="link-body-emphasis text-primary" to="#">
              <TfiTwitter />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="link-body-emphasis text-danger" to="#">
              <TfiInstagram />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="link-body-emphasis text-primary" to="#">
              <TfiFacebook/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;