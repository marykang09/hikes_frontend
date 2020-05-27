import React from 'react';
import TrailsContainer from './TrailsContainer'


class TrailsPage extends React.Component{


    render () {
        return (
            <div> 
                <h1>Trails</h1>
                < TrailsContainer 
                                handleRemoveHike={this.props.handleRemoveHike}
                                handlePatchHike={this.props.handlePatchHike}
                                handleNewHike={this.props.handleNewHike} 
                                myHikes={this.props.myHikes} 
                                trails={this.props.trails} />
            
            </div>
        )
    }
}

export default TrailsPage