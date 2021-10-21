import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Form, Input, Button, Space, Card, InputNumber, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './DimensionBar.css'
const { Option } = Select;
const DimensionBar = () => {
    const [dimension , setDimension] = useState("")

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    function onSelect(val){
        setDimension(val)
    }
    return (
        <div>
            <Container className="container-height mt-5 mb-4">
                <Row>
                    <Col></Col>
                    <Col md={8} lg={8} sm={12}>
                        <Card bordered={true} className="card-style text-center">
                            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                                <Form.List name="users">
                                    {(fields, { add, remove }) => (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'first']}
                                                        fieldKey={[fieldKey, 'first']}
                                                        labelCol={{ span:24 }}
                                                        label="WEIGHT CATEGORY"
                                                        rules={[{ required: true, message: 'Missing first name' }]}
                                                        className="select-width"
                                                        placeholder="weight category"
                                                    >
                                                        <Select>
                                                            <Option value="kg">Kg/cm</Option>
                                                            <Option value="lb">Lb/in</Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'weight']}
                                                        fieldKey={[fieldKey, 'weight']}
                                                        labelCol={{ span:24 }}
                                                        label="WEIGHT"
                                                        rules={[{ required: true, message: 'Missing first name' }]}
                                                        className="select-width"
                                                        
                                                    >
                                                        <Select onSelect={onSelect}>
                                                            <Option value="small">0 - 20</Option>
                                                            <Option value="medium">20 - 40</Option>
                                                            <Option value="large">40 - 60</Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'dimension']}
                                                        fieldKey={[fieldKey, 'dimension']}
                                                        labelCol={{ span: 24 }}
                                                        label="DIMENSION"
                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                    >
                                                        <Input  value={dimension} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'inc']}
                                                        fieldKey={[fieldKey, 'last']}
                                                        labelCol={{ span: 24 }}
                                                        label="NO OF PACKAGES"
                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                    >
                                                        <Button style={{ width: "15%" }}>-</Button><InputNumber min={1} placeholder="Last Name" /><Button style={{ width: "15%" }}>+</Button>
                                                    </Form.Item>
                                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                                </Space>
                                            ))}
                                            <Form.Item>
                                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                    Add field
                                                </Button>
                                            </Form.Item>
                                        </>
                                    )}
                                </Form.List>
                                <Form.Item>
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
export default DimensionBar;