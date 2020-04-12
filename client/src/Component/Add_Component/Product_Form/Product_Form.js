import { Form, Input, Button, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ExpansionPanel from "../Expansion_panel/Expansion_Panel";

import React from "react";
import "./Product_From.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 }
  }
};

const DynamicFieldSet = props => {
  const onFinish = values => {
    console.log("Received values of form:", values);
  };

  var productId = "product_id@";
  var productName = "product_name@";
  var costPrice = "cost_price@";
  var sellPrice = "sell_price@";
  var payment = "payment@";
  var ownership = "ownership@";

  return (
    <Form
      className="mx-auto"
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
    >
      <Form.List name="names">
        {(fields, { add, remove }) => {
          return (
            <div className="mx-auto w-80">
              {fields.map((field, index) => (
                <ExpansionPanel
                  summary={index}
                  fielda={
                    <div className="mx-auto">
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayout)}
                        label="Product Id"
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input Products's Id"
                            }
                          ]}
                          noStyle
                        >
                          <p>Insert Product {index + 1} Details Here</p>
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => {
                              props.clicked(index + 1);
                              console.log(field);
                              remove(field.name);
                            }}
                          />
                        ) : null}
                      </Form.Item>
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayout)}
                        label="Product Id"
                        required={false}
                      >
                        <Form.Item
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input Product's Id."
                            }
                          ]}
                          noStyle
                        >
                          <Input
                            onChange={props.changed}
                            id={productId + index}
                            placeholder="Product id..."
                            style={{ width: "60%", marginRight: 8 }}
                          ></Input>
                        </Form.Item>
                      </Form.Item>
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayout)}
                        label="Product name"
                        required={false}
                      >
                        <Form.Item
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input Product's name."
                            }
                          ]}
                          noStyle
                        >
                          <Input
                            onChange={props.changed}
                            id={productName + index}
                            placeholder="Product name..."
                            style={{ width: "60%", marginRight: 8 }}
                          ></Input>
                        </Form.Item>
                      </Form.Item>
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayout)}
                        label="Cost Price"
                        required={false}
                      >
                        <Form.Item
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input Product's Cost Price."
                            }
                          ]}
                          noStyle
                        >
                          <Input
                            onChange={props.changed}
                            id={costPrice + index}
                            placeholder="Cost Price..."
                            style={{ width: "60%", marginRight: 8 }}
                          ></Input>
                        </Form.Item>
                      </Form.Item>
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayout)}
                        label="Sell Price"
                        required={false}
                      >
                        <Form.Item
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input Product's Sell Price."
                            }
                          ]}
                          noStyle
                        >
                          <Input
                            onChange={props.changed}
                            id={sellPrice + index}
                            placeholder="Sell Price..."
                            style={{ width: "60%", marginRight: 8 }}
                          ></Input>
                        </Form.Item>
                      </Form.Item>

                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayout)}
                        label="Payment Type"
                        required={false}
                      >
                        <Form.Item
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please Select Product's Payment Type."
                            }
                          ]}
                          noStyle
                        >
                          <Select
                            onChange={props.changed}
                            id={payment + index}
                            placeholder="Payment Type..."
                            style={{ width: "30%" }}
                          >
                            <Select.Option value="paying">Paying</Select.Option>
                            <Select.Option value="non_payingr">
                              Non Paying
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </Form.Item>
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayout)}
                        label="Ownership"
                        required={false}
                      >
                        <Form.Item
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please Select Product's ownership."
                            }
                          ]}
                          noStyle
                        >
                          <Select
                            onChange={props.changed}
                            id={ownership + index}
                            placeholder="ownership..."
                            style={{ width: "30%" }}
                          >
                            <Select.Option value="credit">Credit</Select.Option>
                            <Select.Option value="personal">
                              Personal
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </Form.Item>
                    </div>
                  }
                />
              ))}
              <Form.Item style={{ marginTop: "64px" }}>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: "60%" }}
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
