import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Login.css'
import { Card } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { user_login } from '../../redux-services/user-services/user-services';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const Login = () => {
    const [loading, setLoading] = useState(false)

    const onFinish = (values) => {
        user_login(values , setLoading)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    if(loading){
        return <div></div>
    }

    return (
        <div >
            <Container className="container-height mt-5 mb-4">
                <Row>
                    <Col md={2} lg={2} sm={0}></Col>
                    <Col md={8} lg={8} sm={12}>
                        <Card bordered={true} className="card-style" >
                            <span className="top-head"><span className="bold"> USER</span> LOGIN</span>
                            <br />
                            <p>We'd love to discuss our flexible delivery solutions with you! provide your <br />contact information and we'll reach out to you!</p>
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
                                    valuePropName="checked"
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Checkbox style={{fontSize:"18px",fontWeight:"400"}}>Remember me</Checkbox>
                                </Form.Item>
                                </Col>
                                <Col>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Link to="/forgot-password" style={{color:"black",fontSize:"17px",fontWeight:"400"}}>Forgot Password</Link>
                                </Form.Item>
                                </Col>
                                </Row>    
                                <Row className="mt-3 mb-3">
                                    <span style={{fontSize:"17px"}}>Don't have an account ? <Link to="/sign-up" className="link-color">Sign up</Link></span>
                                </Row>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button  htmlType="submit" className="submit-button">
                                        LOGIN
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col md={2} lg={2} sm={0}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
