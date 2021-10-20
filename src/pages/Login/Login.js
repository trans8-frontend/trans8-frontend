import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Login.css'
import { Card } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { user_login } from '../../redux-services/user-services/user-services';
import { textAlign } from '@mui/system';

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
                        <Card bordered={true} className="card-style  text-center">
                            <span className="top-head"><span className="bold"> USER</span> LOGIN</span>
                            <br />
                            <p>We'd love to discuss our flexible delivery solutions with you! provide your <br />contact information and we'll reach out to you!</p>
                            <Form
                                name="basic"
                                labelCol={{ span: 6,}}
                                wrapperCol={{span: 24,}}
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
                                    <Checkbox style={{fontSize:"1vw",fontWeight:"400"}}>Remember me</Checkbox>
                                </Form.Item>
                                </Col>
                                <Col className="">
                                <Form.Item
                                    wrapperCol={{
                                        offset: 0,
                                        span: 16,
                                    }}
                                >
                                    <Link to="/forgot-password" style={{color:"black",fontSize:"1vw",fontWeight:"400"}}>Forgot Password</Link>
                                </Form.Item>
                                </Col>
                                </Row> 
      
                                <div className="singup">
                                    <span >Don't have an account ? <Link to="/sign-up" className="link-color">Sign up</Link></span>
                                </div>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 6,
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
