import React from 'react'
import Trail from '../components/Trail'
import { Row} from 'antd';

const TrailsContainer = (props) => {

    return (
        <div> 
            <Row>
                 {props.trails.map(t => < Trail handleWantToHike={props.handleWantToHike} myHikes={props.myHikes} trail={t} key={t.id} /> )}
             </Row>

        </div>
    )

}

export default TrailsContainer