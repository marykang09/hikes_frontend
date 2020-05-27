import React from 'react'
import { Tooltip, Card, Avatar, Col, Rate } from 'antd';
import {PlusCircleFilled, CheckCircleFilled, CloseCircleOutlined, HeartOutlined, HeartTwoTone} from '@ant-design/icons'
import GoogleMaps from './GoogleMaps'

const { Meta } = Card;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const TrailDetails = (props) => {
    const {name, img_medium, location, difficulty, length, ascent, descent, summary, latitude, longitude} = props.trail
    const thisHike = props.myHikes.find(hike => hike.trail.id === props.trail.id)
    

    const handleChange = value => {
         props.handlePatchHike(thisHike, {rating: value})
    };


    const getActions = () => {

            
        
        if (thisHike){
                let array = [<Tooltip title='remove from your hikes'> <CloseCircleOutlined onClick={() => props.handleRemoveHike(thisHike)}/> </Tooltip>]
                //remove hike button is part of initial array if thisHike exists
                
                //if hike is completed, show the rating, else show the -completed- button
                thisHike.completed? array.unshift(<span>
                                                <Rate tooltips={desc} onChange={handleChange} value={thisHike.rating} />
                                                 {thisHike.rating ? <span className="ant-rate-text">{desc[thisHike.rating - 1]}</span> : ''}
                                                </span>):
                                                array.unshift(  <Tooltip title='already hiked?'>
                                                                   <CheckCircleFilled onClick={() => props.handlePatchHike(thisHike, {completed: true})} />
                                                             </Tooltip>)
                //if hike is already favorited, show -unfavorite- button, else, show the favorite button
                thisHike.favorite? array.unshift( <Tooltip title='unfavorite this hike'>
                                                 <HeartTwoTone twoToneColor="#eb2f96" onClick={() => props.handlePatchHike(thisHike, {favorite: false})}/>
                                             </Tooltip>): 
                                            array.unshift(<Tooltip title='favorite this hike'>
                                                <HeartOutlined onClick={() => props.handlePatchHike(thisHike, {favorite: true})} />
                                             </Tooltip>)
                return(array)  

        }  
    else{
        return [
            <Tooltip title='favorite this hike'>
                <HeartOutlined onClick={()=> props.handleNewHike({trail_id: props.trail.id, favorite: true})} />
              </Tooltip>,
             <Tooltip title='want to hike'>
             <PlusCircleFilled onClick={()=> props.handleNewHike({trail_id: props.trail.id})} />
           </Tooltip>,
            <Tooltip title='already hiked?'>
              <CheckCircleFilled onClick={()=> props.handleNewHike({trail_id: props.trail.id, completed: true})}/>
            </Tooltip>
            ]
        } 
    }
    
    const getDescription = () => {
        return (
            <div>
                Location: {location} <br/>
                Summary: {summary} <br></br>
                Difficulty: {difficulty}<br></br>
                Length: {length}<br></br>
                Ascent: {ascent}<br></br>
                Descent: {descent}<br></br>
            </div>
        )
    }

    return(
        <Col span={8} style={{margin: 'auto'}}> 
        <Card
            bordered= "false" 
            style={{ width: 500 }}
            cover={
            <img
                alt="example"
                src={img_medium}
            />
        }
            actions={getActions()}
        >
            <Meta
            title={name}
            description={getDescription()}
            />
            <GoogleMaps longitude={longitude} latitude={latitude}/>
      </Card>
      </Col>
        
    )
}


 



export default TrailDetails