import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Form, Input , Button } from 'antd';
import { Select } from 'antd';
import './GetQoute.css'
import elipse from '../../assets/Ellipse1.png'
import { autoAddressPick, autoCityPick, create_quote } from '../../redux-services/user-services/user-services';
import DimensionBar from './DimensionBar';
const { Option } = Select;

const GetQoute = () => {
    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])

    const [country_to , setCountry_to] = useState([])
    const [city_to, setCity_to] = useState([]) 

    function onChange() {
    }

    function onSelect(val, key) {
        autoCityPick(key.value, setCity)
    }

    function onSearch(val) {
        autoAddressPick(val, setCountry)
    }

    function onSearchTo(value) {
        autoAddressPick(value, setCountry_to)
    }

    function onSelectTo(val , key){
        autoCityPick(key.value, setCity_to)
    }

    const onFinish = (values) => {
        create_quote(values)
    }

    return (
        <div>
            <Container className="container-height mt-5 mb-4">
                <Row>
                    <Col md={2} lg={2} sm={0}></Col>
                    <Col md={8} lg={8} sm={12} className="card-style text-center">
                        <Row className="mt-5">
                            <Col md={6} lg={6} sm={12}>
                                <span className="top-head"><span className="bold"> GET A</span> QUOTE</span>
                                <br />  <span className="mt-3" style={{ fontWeight: "400" }}>We’d love to discuss our flexible delivery solutions with you! Provide your contact information and we’ll reach out to you!</span>
                                <ul>
                                    <li>
                                        <img src={elipse} alt="" />
                                        ENTER ORIGIN AND DESTINATION
                                    </li>
                                    <li>
                                        {/* <img src={ } alt="" /> */}
                                        COMPLETE YOUR SHIPMENT DETAIL
                                    </li>
                                    <li>
                                        {/* <img src={ } alt="" /> */}
                                        GET AN ESTIMATED QUOTE
                                    </li>
                                    <li>
                                        {/* <img src={ } alt="" /> */}
                                        PROCEED WITH ONLINE BOOKING
                                    </li>
                                </ul>
                            </Col>
                            <Col md={6} lg={6} sm={12}>
                                <Form onFinish={onFinish}
                                    fields={
                                        [
                                            {
                                                name: "city",
                                                value: city.City
                                            },
                                            {
                                                name: "postal_code",
                                                value: city.PostalCode
                                            },
                                            {
                                                name: "provinance",
                                                value: city.Province
                                            },
                                            {
                                                name: "city_to",
                                                value: city_to.City
                                            },
                                            {
                                                name: "postal_code_to",
                                                value: city_to.PostalCode
                                            },
                                            {
                                                name: "province_to",
                                                value: city_to.Province
                                            },
                                        ]
                                    }
                                >
                                    <h4>From</h4>
                                    <Form.Item name="country">
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Select a person"
                                            optionFilterProp="children"
                                            onSelect={onSelect}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            {country.length > 1 && country.map((e, i) => <Option key={`country${i}`} value={e?.Id}>{e?.Text}</Option>)}
                                        </Select>
                                    </Form.Item>

                                    <Form.Item name="city">
                                        <Input defaultValue={city?.City} />
                                    </Form.Item>
                                    <Form.Item name="provinance">
                                        <Input defaultValue={city?.Province} />
                                    </Form.Item>
                                    <Form.Item name="postal_code">
                                        <Input defaultValue={city?.PostalCode} />
                                    </Form.Item>

                                    <h4>To</h4>
                                    <Form.Item name="country_to">
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            optionFilterProp="children"
                                            onSearch={onSearchTo}
                                            onSelect={onSelectTo}
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                           {country_to.length > 1 && country_to.map((e, i) => <Option key={`country${i}`} value={e?.Id}>{e?.Text}</Option>)}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="city_to">
                                        <Input value="" />
                                    </Form.Item>
                                    <Form.Item name="province_to">
                                        <Input value="" />
                                    </Form.Item>
                                    <Form.Item name="postal_code_to">
                                        <Input value="" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button className="submit-btn" style={{width:"100%"}}>DESCRIBE YOUR SHIPMENT</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2} lg={2} sm={0}></Col>
                </Row>

                <DimensionBar />

            </Container>
        </div>
    )
}

export default GetQoute
