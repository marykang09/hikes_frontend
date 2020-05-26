import React from 'react'
import { Tooltip, Card, Avatar, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import {Link} from "react-router-dom";
// import all_clear from 'hikes_frontend/assets/all_clear.png' 

const { Meta } = Card;
const Trail = (props) => {

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

    const {name, location, img_medium, id} = props.trail
    
    // const getIcon = () =>{
    //     if (condition_status === "All Clear"){
    //         return 'hikes_frontend/assets/all_clear.png'} 
    // }

    // we have to know if this is trail on the user's hike list and the data for that "hike"
    const thisHike = props.myHikes.find(hike => hike.trail.name === props.trail.name)


    const getActions = () => {
        if (thisHike){
            if (thisHike.completed){
            return []
            } else {
            return [<Tooltip title='already hiked?'>
            <CheckCircleFilled />
          </Tooltip>]
            }
        }else {
            return [
                <Tooltip title='want to hike'>
                    <PlusCircleFilled onClick={()=>props.handleWantToHike(props.trail)} />
                  </Tooltip>,
                <Tooltip title='already hiked?'>
                  <CheckCircleFilled />
                </Tooltip>
                ]
        }

    }

    return(  
        <Col span={8}>
                <Card  
                    hoverable
                    style={gridStyle, { width: 300 }}
                    cover={
                        // Link to works when you click on the image, not when you click on the name of the hike. 
                        <Link to={`trails/${id}`}>
                            <img
                                alt="example"
                                height={200}
                                src={img_medium}
                                />
                        </Link>
                    }
                    actions={getActions()}
                    >
                        <Meta
                        // avatar={<img height={10} width={10} src={getIcon()}/>}
                        title={name}
                        description={location}
                        
                        />
                 </Card>
         </Col>
    )
}

export default Trail 



