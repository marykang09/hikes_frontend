import React from 'react'
import {PlusCircleFilled, CheckCircleFilled} from '@ant-design/icons'

const TrailDetails = (props) => {
    const {name, img_medium, location, difficulty, length, ascent, descent, summary} = props.trail
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
             <button>Want to hike {<PlusCircleFilled />}</button>
            <button>Already hiked? {<CheckCircleFilled />}</button>
            
        </div>
    )
}


export default TrailDetails