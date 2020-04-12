import React from "react";
import "antd/dist/antd.css";
import "./Product_Form2.css";
import { Form, Input, Button, Select } from "antd";
import { Row, Col, Container } from "react-bootstrap";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ExpansionPanel from "../Expansion_panel/Expansion_Panel";

const { Option } = Select;

const rules = [{ required: true }];

const DynamicFieldSet = props => {
  const onFinish = values => {
    console.log("Received values of form:", values);
  };

  return (
    <Form onFinish={onFinish} className="my-form mt-5">
      <Form.List name="Product">
        {(fields, { add, remove }) => {
          /**
           * `fields` internal fill with `name`, `key`, `fieldKey` props.
           * You can extends this into sub field to support multiple dynamic fields.
           */
          return (
            <div>
              {fields.map((field, index) => (
                <ExpansionPanel
                  summary={index}
                  fielda={
                    <Container>
                      <Row key={field.key}>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Item label="Product Id">
                            <Form.Item
                              name={[field.name, "product_id"]}
                              fieldKey={[field.fieldKey, "product_id"]}
                              rules={rules}
                            >
                              <Input
                                onChange={props.changed}
                                placeholder="Product Id here..."
                              />
                            </Form.Item>
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Item label="Product Name">
                            <Form.Item
                              name={[field.name, "product_name"]}
                              fieldKey={[field.fieldKey, "product_name"]}
                              rules={rules}
                            >
                              <Input
                                onChange={props.changed}
                                placeholder="Product name here..."
                              />
                            </Form.Item>
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Item label="Cost Price">
                            <Form.Item
                              name={[field.name, "cost_price"]}
                              fieldKey={[field.fieldKey, "cost_price"]}
                              rules={rules}
                            >
                              <Input
                                onChange={props.changed}
                                type="number"
                                placeholder="Cost Price here..."
                              />
                            </Form.Item>
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Item label="Sell Price">
                            <Form.Item
                              name={[field.name, "sell_price"]}
                              fieldKey={[field.fieldKey, "sell_price"]}
                              rules={rules}
                            >
                              <Input
                                onChange={props.changed}
                                type="number"
                                placeholder="Sell Price here..."
                              />
                            </Form.Item>
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Item label="Payment">
                            <Form.Item
                              name={[field.name, "payment"]}
                              fieldKey={[field.fieldKey, "payment"]}
                              rules={rules}
                            >
                              <Select onChange={props.option}>
                                <Option value={`paying ${index}`}>
                                  Paying
                                </Option>
                                <Option value={`non_paying ${index}`}>
                                  Non Paying
                                </Option>
                              </Select>
                            </Form.Item>
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                          <Form.Item label="Ownership">
                            <Form.Item
                              name={[field.name, "ownership"]}
                              fieldKey={[field.fieldKey, "ownership"]}
                              rules={rules}
                            >
                              <Select onChange={props.option}>
                                <Option value={`credit ${index}`}>
                                  Credit
                                </Option>
                                <Option value={`personal ${index}`}>
                                  Personal
                                </Option>
                              </Select>
                            </Form.Item>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Container>
                  }
                  minusButton={
                    <Col flex="none">
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name);
                          props.clicked(index);
                        }}
                      />
                    </Col>
                  }
                />
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: "100%" }}
                >
                  <PlusOutlined /> Add Product
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </Form>
  );
};

export default DynamicFieldSet;
