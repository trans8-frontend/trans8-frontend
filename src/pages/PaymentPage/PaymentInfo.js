import React from "react";
import { Container, Row, Col, option, select } from "react-bootstrap";
import "../PaymentPage/UpdateInfo.css";
import { Form, Input, Button } from "antd";
import Credit from "../../assets/Credit-Card-Logos.png";
import './PaymentInfo.css';

import { user_registration } from "../../redux-services/user-services/user-services";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const PaymentInfo = () => {
  const onFinish = (values) => {
    user_registration(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Container className="container-height mt-0 mb-4">
      <div className="img"><img src={Credit} width="100" height="25" /></div>
        <Row>
          <Col></Col>
          <Col md={8} lg={8} sm={12}>
            {/* <Card bordered={true} className="card-style text-center"> */}
            {/* <span className="top-head">
                <span className="bold"> UPDATE</span> ACCOUNT INFO
              </span>
              <br />
              <span>
                We'd love to discuss our flexible delivery solutions with you!
                provide your <br />
                contact information and we'll reach out to you! .
              </span> */}
            <Form
              className="mt-3"
              name="basic"
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 16 }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Card Number"
                name="card_number"
                rules={[
                  {
                    required: true,
                    message: "Please input your card number!",
                  },
                ]}
              >
                <Input placeholder="123412312341231" />
              </Form.Item>
              <Form.Item
                label="Name on card"
                name="name_on_card"
                rules={[
                  {
                    required: true,
                    message: "Please input your card name!",
                  },
                ]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                label="Name on card"
                name="name_on_card"
                rules={[
                  {
                    required: true,
                    message: "Please input your card name!",
                  },
                ]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 7,
                  span: 16,
                }}
              >
                <Button htmlType="submit" className="w-100 light-blue-bg">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            {/* </Card> */}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default PaymentInfo;
