import React from 'react';
import TrailDetails from '../components/TrailDetails'

class TrailsShowPage extends React.Component{
    
    
    render () {

        return this.props.trail? (
            <TrailDetails handleRemoveHike={this.props.handleRemoveHike} handleNewHike={this.props.handleNewHike} handlePatchHike={this.props.handlePatchHike} myHikes={this.props.myHikes} trail={this.props.trail}/>
        ): null
 
    }
    
}

export default TrailsShowPage