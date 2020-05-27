import React, { useState } from 'react';
import { Form, Input, Tooltip,Cascader,Select, Row, Col, Checkbox, Button,AutoComplete,} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';



class SignUpForm extends React.Component {
 

validateUsername = () => {
    console.log('run fetch call to check username')
}

render(){
  return (
    <Col span={8} style={{margin: 'auto'}}>
    <Form
      name="signup"
      scrollToFirstError
    >

    <Form.Item
        name="firstname"
        label="First name"
        rules={[{
            required: true,
            message: 'Please input a firstname',
        }]}
        hasFeedback
      >
        <Input />
      </Form.Item> 
      <Form.Item
        name="lastname"
        label="Last name"
        rules={[{
            required: true,
            message: 'Please input a lastname',
        }]}
        hasFeedback
      >
        <Input />
      </Form.Item>  
      <Form.Item
        name="username"
        label="username"
        rules={[{
            required: true,
            message: 'Please input a username',
        }]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      
      <Form.Item >
        <Button type="primary" htmlType="submit">
          SignUp
        </Button>
      </Form.Item>
    </Form>
    </Col>
  );
    }
};

export default SignUpForm