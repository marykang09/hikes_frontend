import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Input, Col, Button} from 'antd'
// import {Button} from 'react-bootstrap'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
const URL = 'http://localhost:3000/'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '', 
            firstname: '',
            lastname: '',
            passwordConfirmation: '',
            passwordMatch: true,
            usernameValid: true, 
            usernameRequired: false,
            passwordRequired: false,
            errors: {
                username: '',
                password: ''
            }
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    validateUsername = (username) => {
        fetch(URL +'users')
        .then(res => res.json())
        .then(users => {
           if (users.find(u => u.username === username)){
               this.setState({
                   ...this.state,
                   usernameValid: false,
                    errors: {
                        ...this.state.errors,
                        username: 'Username already exists'
                    }
               })
           }
           else if (username.length < 4){
               this.setState({
                   ...this.state,
                   usernameValid: false,
                   errors: {
                       ...this.state.errors,
                       username: 'Username must minimum 4 characters'
                   }
               })
           }
           
           else{
               this.setState({
                   usernameValid: true,
                   errors: {
                       ...this.state.errors,
                       username: ''
                   }
               })
           }
        })
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
        this.validateUsername(e.target.value)
        if (e.target.value.length > 1){
            this.setState({
                usernameRequired: true,
            })
        }else {
            this.setState({
                usernameRequired: false
            })
        }
    }

    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
        if (e.target.value === this.state.passwordConfirmation) {
                        this.setState({
                            passwordMatch: true,
                            errors: {
                                ...this.state.errors, 
                                password: ''
                            }
                        })
                    }else{
                        this.setState({
                            passwordMatch: false,
                            errors: {
                                ...this.state.errors,
                                password: 'Passwords must match'
                            }
                        })
                    }
        if (e.target.value.length > 1){
            this.setState({
                passwordRequired: true,
            })
        }else {
            this.setState({
                passwordRequired: false
            })
        }
    }

    passwordConfirmationChange = (e) => {
        this.setState({
            passwordConfirmation: e.target.value
        })
        if (e.target.value === this.state.password) {
            this.setState({
                passwordMatch: true,
                errors: {
                    ...this.state.errors,
                    password: ''
                }
            })
        }else{
            this.setState({
                passwordMatch: false,
                errors: {
                    ...this.state.errors,
                    password: 'Passwords must match'
                }
            })
        }
    }

    handleSignUpSubmit = (e) => {
        e.preventDefault()
        if (this.state.passwordMatch && this.state.usernameValid && this.state.usernameRequired && this.state.passwordRequired){
            this.props.handleNewUser(this.state)
            this.setState({
                username: '',
                password: '', 
                firstname: '',
                lastname: '',
                passwordConfirmation: '',
                passwordMatch: true,
                usernameValid: true, 
                usernameRequired: false,
                passwordRequired: false,
                errors: {
                    username: '',
                    password: ''
                }
            })
        }
        if (!this.state.passwordRequired && !this.state.usernameRequired){
            this.setState({
                ...this.state,
                errors: {
                    ...this.state.errors,
                    password: 'Password is Required',
                    username: 'Username is Required'
                }
            })
        }
        else if (!this.state.usernameRequired){
            this.setState({
                ...this.state,
                errors: {
                    ...this.state.errors,
                    username: 'Username is Required'
                }
            })
        }
        else if (!this.state.passwordRequired){
            this.setState({
                ...this.state,
                errors: {
                    ...this.state.errors,
                    password: 'Password is Required'
                }
            })
        }
    }

    render(){
        return (
            <Col className='signUpForm' span={8}>
                <h2>Sign Up</h2>
                <Form >
                <Form.Item
                    name="firstname"> 
                     <Input id='firstname' value={this.state.firstname} onChange={this.onChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                    </Form.Item>
                <Form.Item
                    name="lastname"> 
                     <Input id='lastname' value={this.state.lastanme} onChange={this.onChange}  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
                    </Form.Item>

                 <Form.Item
                    name="username"> 
                     <Input value={this.state.username} onChange={this.onUsernameChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    {this.state.errors.username.length < 1? null : <div className='error'>{this.state.errors.username}</div>}
                    </Form.Item>
                    
                    <Form.Item
                    name="password"> 
                     <Input onChange={this.passwordChange} value={this.state.password}type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
                    </Form.Item>

                    <Form.Item
                    name="passwordConfirmation"> 
                     <Input onChange={this.passwordConfirmationChange} type="password" value={this.state.passwordConfirmation} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="confirm password" />
                    {this.state.errors.password.length < 1? null: <div className='error'>{this.state.errors.password}</div>}
                    </Form.Item>
                    <Form.Item>
                <Button 
                    type='submit'
                    className="btn-light"
                    onClick={this.handleSignUpSubmit}>
                SignUp
                </Button>
                Or <Link to="/login" >Login</Link>
            </Form.Item>

                </Form>
            </Col>
        )
    }


}

export default SignUp