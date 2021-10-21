import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../PaymentPage/UpdateInfo.css";
import { Form, Input, Button, Checkbox } from "antd";
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
              labelCol={{ span: 6 }}
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
                <Input placeholder="First name" />
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
                <Input placeholder="Last name" />
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
                <Input placeholder="Your phone" />
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
                <Input placeholder="Your email" />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    type: "address",
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input placeholder="Your address" />
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    type: "city",
                    message: "Please input your city!",
                  },
                ]}
              >
                <Input placeholder="Your city" />
              </Form.Item>
              <Form.Item
                label="Province"
                name="province"
                rules={[
                  {
                    required: true,
                    type: "province",
                    message: "Please input your province!",
                  },
                ]}
              >
                <Input placeholder="Your province" />
              </Form.Item>

              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    type: "country",
                    message: "Please input your country!",
                  },
                ]}
              >
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Country</option>
                  <option value="1">UAE</option>
                  <option value="2">US</option>
                  <option value="3">UK</option>
                </select>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button htmlType="submit" className="w-100 light-blue-bg">
                  Update Information
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
