import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Login.css'
import { Card } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div >
            <Container className="container-height mt-5 mb-4">
                <Row>
                    <Col></Col>
                    <Col md={8} lg={8} sm={12}>
                        <Card bordered={true} className="card-style text-center" >
                            <p>USER LOGIN</p>
                            <span>We'd love to discuss our flexible delivery solutions with you! provide your <br />contact information and we'll reach out to you!</span>
                            <Form
                                name="basic"
                                labelCol={{ span: 8,}}
                                wrapperCol={{span: 16,}}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
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
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Row>  
                                   <Col>   
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                </Col>
                                <Col>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Link to="/forgot-password">Forgot Password</Link>
                                </Form.Item>
                                </Col>
                                </Row>    
                                <Row>
                                    <p>Don't have an account ? <Link to="/sign-up">Sign up</Link></p>
                                </Row>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
