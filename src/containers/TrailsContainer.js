import React from 'react'
import Trail from '../components/Trail'

const TrailsContainer = (props) => {

    return (
        <div> 
            <h3>This is the trails container</h3>
            {props.trails.map(t => < Trail trail={t} key={t.id} /> )}
            


        </div>
    )

}

export default TrailsContainer