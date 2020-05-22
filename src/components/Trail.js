import React from 'react'
import { Card, Avatar, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import {Link} from "react-router-dom";
// import all_clear from 'hikes_frontend/assets/all_clear.png' 

const { Meta } = Card;
const Trail = (props) => {

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

    const {name, location, img_medium, condition_status, id} = props.trail
    
    const getIcon = () =>{
        if (condition_status === "All Clear"){
            return 'hikes_frontend/assets/all_clear.png'}
        
    } 
    return(  
        <Col span={8}>
            < Link to={`trails/${id}`}>
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
                        <button>Want to hike {<PlusCircleFilled />}</button>,
                        <button>Already hiked? {<CheckCircleFilled />}</button>
                    ]}
                    >
                        <Meta
                        avatar={<img height={10} width={10} src={getIcon()}/>}
                        title={name}
                        description={location}
                        />
                 </Card>
             </Link>
         </Col>
    )
}

export default Trail 



