import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Signup.css";
import { Card, InputNumber } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { user_registration } from "../../redux-services/user-services/user-services";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const Signup = () => {
  const onFinish = (values) => {
    user_registration(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Container className="container-height mt-5 mb-4">
        <Row>
          <Col></Col>
          <Col md={8} lg={8} sm={12}>
            <Card bordered={true} className="card-style text-center">
            <span className="top-head"><span className="bold"> LOGIN</span> REGISTRATION</span>
            <br />
              <span>
                We'd love to discuss our flexible delivery solutions with you!
                provide your <br />
                contact information and we'll reach out to you!
              </span>
              <Form
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
                  label="First name"
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="c_password"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone_number"
                  rules={[
                    {
                      required: true,

                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Row>
                  <p>
                    Already a member ? <Link to="/login" className="link-color">Login</Link>
                  </p>
                </Row>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Registration
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Signup;
