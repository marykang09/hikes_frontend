import React from 'react'
import {Link} from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

class NavBar extends React.Component{
    constructor(){
        super()
        // this.state = {
        //     current: ""
        // }
    }

    // handleClick = e => {
    //     console.log('click ', e)
    //     this.setState({
    //       current: e.key,
    //     })

    
    render(){
        return(
        <Menu mode="horizontal">
                <Menu.Item key="trails" icon={<MailOutlined />}>
                    <Link to="/">Trails</Link>
                </Menu.Item>
                <Menu.Item key="about"  icon={<AppstoreOutlined />}>
                <Link to="/about">About</Link>
                </Menu.Item>
        
            <Menu.Item key="alipay">
                Login
            </Menu.Item>
        </Menu>
        )
    }
}

export default NavBar


{/* <div className={`ui inverted ${props.color} menu navbar`}>
<Link to="/" className="item">
  <h2 className="ui header">
    <i className={`${props.icon} icon`}></i>
    <div className="content">{props.title}</div>
    <div className="sub header">{props.subtitle}</div>
  </h2>
</Link>
<div className="item">
 <Link to="/">About Page</Link>
</div>
<div className="item">
 <Link to="/paintings">Gallery Page</Link>
</div>
</div> */}