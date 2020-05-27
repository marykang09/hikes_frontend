import React from 'react'
import {Row} from 'antd'
import Trail from '../components/Trail'
import SearchBar from '../components/SearchBar'

class MyHikesPage extends React.Component{
    render(){
        return(
            <div>
                <h1>My Hikes</h1>
                <SearchBar 
                    handleSearchTerm={this.props.handleSearchTerm} 
                    searchTerm={this.props.searchTerm}/>
                <h2> My Completed Hikes </h2>
                <div>
                    <Row>
                     {this.props.myHikes.filter(hike=> hike.completed).map(h => < Trail handleRemoveHike={this.props.handleRemoveHike} handlePatchHike={this.props.handlePatchHike} myHikes={this.props.myHikes} trail={h.trail} key={h.trail.id} /> )}
                     </Row>
                </div>
                <p>
                </p>
                <h2> I want to hike... </h2>
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