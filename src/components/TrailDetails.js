import React from 'react'
import {PlusCircleFilled, CheckCircleFilled, CloseCircleOutlined} from '@ant-design/icons'
import GoogleMaps from './GoogleMaps'

const TrailDetails = (props) => {
    const {name, img_medium, location, difficulty, length, ascent, descent, summary, latitude, longitude} = props.trail
    const thisHike = props.myHikes.find(hike => hike.trail.id === props.trail.id)
    
    const getButtons = () => {
        if (thisHike) {
            if(thisHike.completed){
                return (<div><button onClick={() => props.handleRemoveHike(thisHike)}>Remove from your hikes{<CloseCircleOutlined />}</button></div>)
            } else {
                return(<div>
                        <button onClick={() => props.handlePatchHike(thisHike,{completed: true})}>Already hiked? {<CheckCircleFilled  />}</button>
                        <button onClick={() => props.handleRemoveHike(thisHike)}>Remove from your hikes{<CloseCircleOutlined />}</button>
                    </div>)
            }
        } else {
        return (
            <div>
                <button onClick={() => props.handleNewHike({trail_id: props.trail.id})}>Want to hike {<PlusCircleFilled />}</button>
                <button onClick={() => props.handleNewHike({trail_id: props.trail.id, completed: true})}>Already hiked? {<CheckCircleFilled />}</button>
            </div>
            )
        } 
    }   

    return(
        <div>
            <br></br>
            <h3>Details about {name}</h3>
                <div><img src={img_medium}/> </div>
            <p>
                Location: {location}<br></br>
                Difficulty: {difficulty}<br></br>
                Length: {length}<br></br>
                Ascent: {ascent}<br></br>
                Descent: {descent}<br></br>
                Summary: {summary}<br></br>
            </p>
            <div>{getButtons()}</div>
           
                    <div>
                        <GoogleMaps longitude={longitude} latitude={latitude} />
                    </div>
        </div>
    )
}


export default TrailDetails