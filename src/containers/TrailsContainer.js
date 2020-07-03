import React from 'react'
import Trail from '../components/Trail'
import { Row} from 'antd';

const TrailsContainer = (props) => {

    return (
        <div> 
             <Row className='trailsContainerRow'>
                 
                 {props.trails.map(t => < Trail 
                                            hike={props.myHikes.find(h=> h.trail.id === t.id)}
                                            handleRemoveHike={props.handleRemoveHike}
                                            handlePatchHike={props.handlePatchHike}
                                            handleNewHike={props.handleNewHike} 
                                            myHikes={props.myHikes} 
                                            trail={t} 
                                            key={t.id} /> )}
             </Row>

        </div>
    )

}

export default TrailsContainer