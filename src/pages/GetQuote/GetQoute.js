import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Form, Input } from 'antd';
import { Select } from 'antd';
const { Option } = Select;

const GetQoute = () => {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        <div>
            <Container className="container-height mt-5 mb-4">
               
                    <Row>
                        <Col md={1} lg={1} sm={0}></Col>
                        <Col md={10} lg={10} sm={12} className="card-style text-center">
                        <Row>  
                        <Col md={6} lg={6} sm={12}>
                            <h4>GET A QOUTE</h4>
                            <p>We’d love to discuss our flexible delivery solutions with you! Provide your contact information and we’ll reach out to you!</p>
                            <ul> 
                                <li>ENTER ORIGIN AND DESTINATION</li>
                                <li>COMPLETE YOUR SHIPMENT DETAIL</li>
                                <li>GET AN ESTIMATED QUOTE</li>
                                <li>PROCEED WITH ONLINE BOOKING </li>
                            </ul>
                        </Col>
                        <Col md={6} lg={6} sm={12}>
                                 
                            <h4>From</h4>
                            <Form.Item name="country">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}W
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="country">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="country">
                                <Input />
                            </Form.Item>

                            <h4>To</h4>
                            <Form.Item name="country">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="country">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="country">
                                <Input />
                            </Form.Item> 
                        </Col>
                        </Row>
                        </Col>
                        <Col md={1} lg={1} sm={0}></Col>

                    </Row>
             
            </Container>
        </div>
    )
}

export default GetQoute
