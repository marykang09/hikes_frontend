import React from 'react';
import TrailsContainer from './TrailsContainer'


class TrailsPage extends React.Component{


    render () {
        return (
            <div> 
                <h1>Trails</h1>
                < TrailsContainer trails={this.props.trails} />
            
            </div>
        )
    }
}

export default TrailsPage