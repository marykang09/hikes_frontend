import React from 'react'
import {Row} from 'antd'
import Trail from '../components/Trail'

class MyHikesPage extends React.Component{
    render(){
        return(
            <div>
                <h2>My Hikes Page</h2>
                <h3>My Completed Hikes</h3>
                <div>
                    <Row>
                     {this.props.myHikes.filter(hike=> hike.completed).map(h => < Trail handleRemoveHike={this.props.handleRemoveHike} handlePatchHike={this.props.handlePatchHike} myHikes={this.props.myHikes} trail={h.trail} key={h.trail.id} /> )}
                     </Row>
                </div>
                <p>
                </p>
                <h3>Hikes To Try</h3>
                <div>
                    <Row>
                     {this.props.myHikes.filter(hike=> hike.completed === false).map(h => < Trail handleRemoveHike={this.props.handleRemoveHike} handlePatchHike={this.props.handlePatchHike} myHikes={this.props.myHikes} trail={h.trail} key={h.trail.id} /> )}
                     </Row>
                </div>
            </div>
        )
    }
}

export default MyHikesPage