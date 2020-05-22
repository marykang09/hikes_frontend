import React from 'react'
import { Card, Avatar, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
// import all_clear from 'hikes_frontend/assets/all_clear.png' 

const Trail = (props) => {

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

    const {name, location, img_medium, condition_status} = props.trail
    
    const getIcon = () =>{
        if (condition_status === "All Clear"){
            return 'hikes_frontend/assets/all_clear.png'}
        
    }





    

    return(  
        <Col span={8}>
                <Card
                hoverable
                style={gridStyle, { width: 300 }}
                cover={
                <img
                    alt="example"
                    height={200}
                    src={img_medium}
                />
                }
                actions={[
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
                 >
                    <Meta
                    avatar={<img height={10} width={10} src={getIcon()}/>}
                    title={name}
                    description={location}
                    />
             </Card>
         </Col>
    )
}

export default Trail 



