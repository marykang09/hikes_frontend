import React from 'react'
import {Link} from "react-router-dom";
import { Menu} from 'antd';
import { CompassOutlined, BulbOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../assets/getTrails.png'


class NavBar extends React.Component{
    constructor(){
        super()
        this.state = {
            loginVisible: false
        }
    }

  showLogin = () => {
    this.setState({
      loginVisible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      loginVisible: false,
    });
  };

  handleCancel = e => {
    console.log(e)
    this.setState({
        loginVisible: false
    })
  }

    // handleClick = e => {
    //     console.log('click ', e)
    //     this.setState({
    //       current: e.key,
    //     })
  render(){
      return(
          <div>
              <Menu mode="horizontal">
                
                  <Menu.Item key="trails">
                          <Link to="/"><img alt={'logo'} height={60}src={logo} style={{float: 'left'}}/></Link>
                   </Menu.Item>
                  


                  <Menu.Item key="trails" icon={<CompassOutlined/>}>
                      <Link to="/">Trails</Link>
                  </Menu.Item>
                  
                  <Menu.Item key="about"  icon={<BulbOutlined />}>
                      <Link to="/about">About</Link>
                  </Menu.Item>


                  {this.props.currentUser === null? 
                  <Menu.Item key="login" onClick={this.showLogin}>
                      <Link to="/login">Login</Link>
                    
                  </Menu.Item>
                  : 
                        <Menu.Item key="my-hikes"icon={<UserOutlined />} >
                          <Link to="/myhikes">My Hikes</Link>
                        </Menu.Item>
                    }

                  {this.props.currentUser === null? 
                    null
                  : 
                        <Menu.Item key="username">
                          <Link to="/myhikes">@{this.props.currentUser.username}</Link>
                        </Menu.Item>
                    }


                {this.props.currentUser === null?
                    null : 
                    <Menu.Item key="logout" onClick={this.props.handleLogout}>
                    Logout
                  </Menu.Item> }
                  
              </Menu>
           </div>
        )
    }
}

export default NavBar


