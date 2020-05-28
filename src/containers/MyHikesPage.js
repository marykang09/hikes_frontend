import React from 'react'
import {Row} from 'antd'
import Trail from '../components/Trail'
import SearchBar from '../components/SearchBar'
import NoCompletedHikes from '../components/NoCompletedHikes'
import NoSavedHikes from '../components/NoSavedHikes'

class MyHikesPage extends React.Component{
    render(){
        const completedHikes = this.props.myHikes.filter(hike=> hike.completed)
        const incompletedHikes = this.props.myHikes.filter(hike=> hike.completed === false)
        
        return(
            <div>
                <SearchBar 
                    handleSearchTerm={this.props.handleSearchTerm} 
                    searchTerm={this.props.searchTerm}/>
                <div>
                     {completedHikes.length > 0 ?
                    <div>
                    <h2> My Completed Hikes </h2>  
                     <Row> {completedHikes.map(h => < Trail handleRemoveHike={this.props.handleRemoveHike} handlePatchHike={this.props.handlePatchHike} myHikes={this.props.myHikes} trail={h.trail} key={h.trail.id} /> ) }</Row>
                     </div>
                     : <NoCompletedHikes/>}
                 
                </div>
                <p>
                </p>
                <div>
                     {incompletedHikes.length > 0 ? 
                     <div>
                    <h2> I want to hike... </h2> 
                     <Row> { incompletedHikes.map(h => < Trail handleRemoveHike={this.props.handleRemoveHike} handlePatchHike={this.props.handlePatchHike} myHikes={this.props.myHikes} trail={h.trail} key={h.trail.id} /> )} </Row> 
                     </div>
                     : <NoSavedHikes/>}
                </div>
            </div>
        )
    }
}

export default MyHikesPage