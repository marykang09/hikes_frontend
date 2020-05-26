import React from 'react'
import {PlusCircleFilled, CheckCircleFilled} from '@ant-design/icons'
import GoogleMaps from './googleMaps'

const TrailDetails = (props) => {
    const {name, img_medium, location, difficulty, length, ascent, descent, summary, latitude, longitude} = props.trail
    const thisHike = props.myHikes.find(hike => hike.trail.id === props.trail.id)
    
    const getButtons = () => {
    if (thisHike) {
        if(thisHike.completed){
            return (<div></div>)
        }else {
            return <button>Already hiked? {<CheckCircleFilled />}</button>
        }
    } else {
    return (
        <div>
            <button onClick={() => props.handleNewHike(props.trail, false)}>Want to hike {<PlusCircleFilled />}</button>
            <button onClick={() => props.handleNewHike(props.trail, true)}>Already hiked? {<CheckCircleFilled />}</button>
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