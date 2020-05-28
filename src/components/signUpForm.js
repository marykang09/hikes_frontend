import React, { useState } from 'react';
import { Form, Input, Tooltip,Cascader,Select, Row, Col, Checkbox, Button,AutoComplete,} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';



class SignUpForm extends React.Component {
 
    constructor(){
      super()
      this.state = {
        firstname: '',
        lastname: '', 
        username: '',
        password: ''
      }
    }

    // validateUsername = (value) => {
    //     console.log('run fetch call to check username')
    // }

    onFirstNameChange = (event) => {
      this.setState({firstname: event.target.value})
    }

    onLastNameChange = (event) => {
      this.setState({lastname: event.target.value})
    }

    onUsernameChange = (event) => {
      this.setState({username: event.target.value})
    }
    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }


    handleClearAndSubmit = () => {
      this.props.handleNewUser(this.state)
      this.setState({
        firstname: '',
        lastname: '', 
        username: '',
        password: ''
      })
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
        value={this.state.firstname}
        onChange={this.onFirstNameChange}
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
        value={this.state.lastname}
        onChange={this.onLastNameChange}
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
        value={this.state.username}
        onChange={this.onUsernameChange}
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
        value={this.state.password}
        onChange={this.onPasswordChange}
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
          // },
          // ({ getFieldValue }) => ({
          //   validator(rule, value) {
          //     if ( validateUsername(value)) {
          //       return Promise.resolve();
          //     }
          //     return Promise.reject('The two passwords that you entered do not match!');
          //   }})
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
        <Button type="primary" htmlType="submit" onClick={this.handleClearAndSubmit}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </Col>
  );
    }
};

export default SignUpForm