import React from 'react'
import {Link} from "react-router-dom";
import { Menu, Modal } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import LoginForm from './loginForm'
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
                    <Menu.Item key="trails" icon={<MailOutlined />}>
                        <Link to="/">Trails</Link>
                    </Menu.Item>
                    
                    <Menu.Item key="about"  icon={<AppstoreOutlined />}>
                        <Link to="/about">About</Link>
                    </Menu.Item>

                    <Menu.Item key="alipay" onClick={this.showLogin}>
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
