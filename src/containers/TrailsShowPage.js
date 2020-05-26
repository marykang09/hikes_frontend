import React from 'react';
import TrailDetails from '../components/TrailDetails'

class TrailsShowPage extends React.Component{
    
    
    render () {

        return this.props.trail? (
            <TrailDetails handleNewHike={this.props.handleNewHike} handleCompletedHike={this.props.handleCompletedHike} myHikes={this.props.myHikes} trail={this.props.trail}/>
        ): null
 
    }
    
}

export default TrailsShowPage