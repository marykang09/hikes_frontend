import React from 'react'
import {Link} from "react-router-dom";
import { Menu, Modal } from 'antd';
import { CompassOutlined, BulbOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../assets/getTrails.png'

const { SubMenu } = Menu;

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
                  


                  {this.props.currentUser === null? 
                  <Menu.Item key="login" onClick={this.showLogin}>
                      <Link to="/login">Login</Link>
                      {/* <Modal
                          title="Login"
                          visible={this.state.loginVisible}
                          onOk={() => this.handleOk.bind(this)}
                          onCancel={() => this.handleCancel.bind(this)}
                          >
                          <LoginForm />
                      </Modal>  */}
                  </Menu.Item>
                  : 
                        <Menu.Item key="my-hikes"icon={<UserOutlined />} >
                          <Link to="/myhikes">My Hikes</Link>
                        </Menu.Item>
                    }

                  <Menu.Item key="about"  icon={<BulbOutlined />}>
                      <Link to="/about">About</Link>
                  </Menu.Item>

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


// import { Modal, Button } from 'antd';

// class App extends React.Component {

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.showModal}>
//           Open Modal
//         </Button>
//      
//       </div>
//     );
//   }
// }
