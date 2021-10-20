import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EuroIcon from "@mui/icons-material/Euro";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GroupIcon from "@mui/icons-material/Group";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./LandingPage.css";

import { Button, Form, Col, Row, Card } from "react-bootstrap";
import Land from "../../assets/Group 707.png";
import Medical from "../../assets/Group 706.png";
import Financial from "../../assets/Group 705.png";
import B2B from "../../assets/Group 704.png";
import Globe from "../../assets/global.png";

const DashboardPage = () => {
  return (
    <>
      <div className="sevice_section">
        <div style={{paddingTop: '50px'}}>
          <span className="subtitle">SERVICE</span>
          <span className="subtitle2">PROTECTED</span>
        </div>

        <div className="services">
          <div>
            <img src={Land} width="200" height="200" />
            <h5 style={{ fontSize: "1.2vw" }}>E-COMMERCE</h5>
            <h6 style={{ fontSize: "1vw",color: "#35BDD0" }}>It is a long established</h6>
          </div>
          <div>
            <img src={Medical} width="200" height="200" />
            <h5 style={{ fontSize: "1.2vw" }}>MEDICAL</h5>
            <h6 style={{ fontSize: "1vw",color: "#35BDD0" }}>It is a long established</h6>
          </div>
          <div>
            <img src={Financial} width="200" height="200" />
            <h5 style={{ fontSize: "1.2vw" }}>FINACIAL</h5>
            <h6 style={{ fontSize: "1vw",color: "#35BDD0" }}>It is a long established</h6>
          </div>
          <div>
            <img src={B2B} width="200" height="200" />
            <h5 style={{ fontSize: "1.2vw" }}>B2B</h5>
            <h6 style={{ fontSize: "1vw",color: "#35BDD0" }}>It is a long established</h6>
          </div>
        </div>
      </div>

      <div className="footer_sec">
        <div className="form_sub">
          <Card.Title className="register-title text-center">
            <span className="title-thin  text-white">{"HOW CAN"} </span>
            <span className=" text-white">WE HELP?</span>
          </Card.Title>
          <Card.Text>
            <div className="register-subtitle text-white mb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout looking
              at its layout.
            </div>
          </Card.Text>
          <Form>
            <Row className="mt-6">
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Form.Control placeholder="Phone" />
              </Col>
              <Col>
                <Form.Control placeholder="Email" />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Form.Control placeholder="I am intrested in" />
              </Col>
            </Row>
            <Form>
              <Form.Group
                className="mt-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" placeholder="Message" rows={6} />
              </Form.Group>
            </Form>
          </Form>
        </div>
        <Card.Title className="register-title text-center mt-3">
          <button className="button_text">Contact Me</button>
        </Card.Title>
      </div>

      <div location_title>
        <Card.Title className="register-title text-center pt-5">
          <span style={{color: '#054B8B',fontSize: "2vw"}}>{"SAME-DAY DELIVERY"} </span>
          <span style={{color: '#054B8B',fontWeight: '800',fontSize: "vw"}}>WITHIN YOUR REACH</span>
        </Card.Title>
        <Card.Text>
          <div className="register-subtitle text-blue pt-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
         
          </div>
        </Card.Text>
      </div>
      <div className="location">
        <div>
          <h1 className="title_rate">
            75 <span className="plus_sign">+</span>{" "}
          </h1>
          <h4 className="">North American</h4>
          <h4 className="sub">Locations</h4>
        </div>

        <div>
          <h1 className="title_rate">
            6k <span className="plus_sign">+</span>{" "}
          </h1>
          <h4 className="">Professional Service</h4>
          <h4 className="sub">providers</h4>
        </div>
        <div>
          <h1 className="title_rate">
            90 <span className="plus_sign">+</span>{" "}
          </h1>
          <h4 className="">Percent of Population</h4>
          <h4 className="sub">Covered</h4>
        </div>
      </div>
      <div className="globe">
        <img src={Globe} width="100%" height="100%" />
      </div>
    </>
  );
};

export default DashboardPage;
