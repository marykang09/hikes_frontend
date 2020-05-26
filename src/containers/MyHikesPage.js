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
                     {this.props.hikes.filter(hike=> hike.completed).map(h => < Trail myHikes={this.props.hikes} trail={h.trail} key={h.trail.id} /> )}
                     </Row>
                </div>
                <p>
                    {console.log(this.props.hikes)}
                </p>
                <h3>Hikes To Try</h3>
                <div>
                    <Row>
                     {this.props.hikes.filter(hike=> hike.completed === false).map(h => < Trail myHikes={this.props.hikes} trail={h.trail} key={h.trail.id} /> )}
                     </Row>
                </div>
            </div>
        )
    }
}

export default MyHikesPage