import React, { useState } from "react";
import { Row, Col, Hidden } from "react-grid-system";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import axios from "axios";

import "./Contact.scss";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();

    const requestBody = `
    We have a new message!

    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Message: ${message}
    `;

    axios({
      method: "POST",
      url: "https://xfngqz4xu3.execute-api.eu-west-2.amazonaws.com/dev/contact",
      data: [requestBody],
    });
  }

  return (
    <div className="contact-form-container">
      <BoxedLayout>
        <div className="inner-container">
          <form onSubmit={submitForm} className="form">
            <div className="form-content">
              <div className="input-group">
                <label>First Name*</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Last Name*</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Email address*</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>
                  Tell us about your business and requirements of a new project
                  you want to start with us!
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">SEND TO US!</button>
            </div>
          </form>
          <div className="contact-details-container">
            <div className="contact-details-content">
              <h2>Contact Us</h2>
              <div className="full-stop"></div>
              <p>
                Want to find out more?
                <br />
                Fill out the form and we can book a free consultation.
              </p>
              <Row align="center">
                <Col xl={1} lg={1}>
                  <FontAwesomeIcon className="icon" icon="map-marker-alt" />
                </Col>
                <Col xl={11} lg={11}>
                  <h4>London City</h4>
                  <p>The Hop Exchange 24 Southwark St London SE1 1TY</p>
                </Col>
              </Row>
              <Row align="center">
                <Col xl={1} lg={1}>
                  <FontAwesomeIcon icon="envelope" />
                </Col>
                <Col xl={11} lg={11}>
                  <p>contact@godragons.com</p>
                </Col>
              </Row>
              <Row align="center">
                <Col xl={1} lg={1}>
                  <FontAwesomeIcon icon="envelope" />
                </Col>
                <Col xl={11} lg={11}>
                  <p>contact@godragons.com</p>
                </Col>
              </Row>
              <Row align="center">
                <Col xl={1} lg={1}>
                  <a href="https://www.linkedin.com/company/godragons">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </Col>
                <Col xl={1} lg={1}>
                  <a href="https://twitter.com/GoDragonsTech">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </BoxedLayout>
    </div>
  );
}

export default Contact;
