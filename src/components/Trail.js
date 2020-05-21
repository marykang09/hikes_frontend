import React from 'react'
import {Card} from 'antd'

const Trail = (props) => {
    return(
        <div>
            <Card />
            <h3>Trail Info:</h3>
            <p> 
                Name: {props.trail.name}
                <br></br>
                Length: {props.trail.length}

            </p>

        </div>

    )
}

export default Trail 