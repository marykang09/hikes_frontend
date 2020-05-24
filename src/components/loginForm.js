import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
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
            if (data.error_message){
                alert(data.error_message)
            }else {
                this.props.changeCurrentUser(data)
            }
        })
    }

        // .then(response => response.json())
        // .then(userData => console.log(userData))
    

    render(){
        return (
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

        </Form.Item>

        <Form.Item>
            <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                onClick={this.handleLoginSubmit}>
            Log In
            </Button>
            Or <a href="">Register Now!</a>
        </Form.Item>
        </Form>
    )
    
    }
}

export default loginForm


