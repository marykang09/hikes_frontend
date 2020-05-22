import React from 'react';
import TrailDetails from '../components/TrailDetails'

class TrailsShowPage extends React.Component{
    
    
    render () {
        return this.props.trail? (
            <TrailDetails trail={this.props.trail}/>
        ): null
 
    }
}

export default TrailsShowPage