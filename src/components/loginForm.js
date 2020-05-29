import { Form, Input, Button, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

import React from 'react'

class loginForm extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
  
    handleLoginSubmit = () => {
        const userObj = {
            username: this.state.username,
            password: this.state.password
        }     
        fetch("http://localhost:3000/login", {
            method:"POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then((response) => response.json())
        .then(data => {
            console.log("response", data)
            if (data.error_message){
                alert(data.error_message)
            }else {
                localStorage.setItem("token", data.token)
                this.props.changeCurrentUser(data.user_data)
            }
        })
    }

        // .then(response => response.json())
        // .then(userData => console.log(userData))
    

    render(){
        return (
        <Col span={8} style={{margin: 'auto'}}>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        >
            
        <Form.Item
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your Username!',
            },
            ]}
        >
            <Input prefix={<UserOutlined 
                                className="site-form-item-icon" />} 
                                placeholder="Username" 
                                name="username"
                                onChange={this.handleChange} 
                                value={this.state.username}/>
        </Form.Item>
        
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your Password!',
            },
            ]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            />
        </Form.Item>
    

        <Form.Item>
            <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                onClick={this.handleLoginSubmit}>
            Log In
            </Button>
            Or <Link to="/signup" >Register Now!</Link>
        </Form.Item>
        </Form>
        </Col>
    )
    
    }
}

export default loginForm


