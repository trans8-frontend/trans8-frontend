import React from "react";
import { Container, Row, Col, option, select } from "react-bootstrap";
import "../PaymentPage/UpdateInfo.css";
import { Form, Input, Button } from "antd";
import { user_registration } from "../../redux-services/user-services/user-services";
import { Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const Signup = () => {
  const onFinish = (values) => {
    user_registration(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Container className="container-height mt-0 mb-4">
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
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Current Password"
                name="current_password"
                rules={[
                  {
                    required: true,
                    message: "Please input your old password!",
                  },
                ]}
              >
                <Input placeholder="Enter your old password" />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="new_password"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
              >
                <Input placeholder="Enter new password" />
              </Form.Item>
              <Form.Item
                label="Retype Password"
                name="retype_password"
                rules={[
                  {
                    required: true,
                    message: "Please input your retype_password!",
                  },
                ]}
              >
                <Input placeholder="Re-type new password" />
              </Form.Item>

              
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button htmlType="submit" className="w-100 light-blue-bg">
                  Update Password
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
export default Signup;
