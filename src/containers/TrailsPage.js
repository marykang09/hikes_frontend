import React from 'react';
import TrailsContainer from './TrailsContainer'
import SearchBar from '../components/SearchBar'


class TrailsPage extends React.Component{


    render () {
        return (
            <div> 
                < SearchBar handleSearchTerm={this.props.handleSearchTerm} searchTerm={this.props.searchTerm}/>
                {this.props.searchTerm.length > 0? <div>Search results for '{this.props.searchTerm}'...</div>: null }
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