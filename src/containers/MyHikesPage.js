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
            <div className='myHikes'>
                <SearchBar 
                    handleSearchTerm={this.props.handleSearchTerm} 
                    searchTerm={this.props.searchTerm}/>
                {this.props.searchTerm.length > 0? <div>Search results for '{this.props.searchTerm}'...</div>: null }
                <div>
                     {completedHikes.length > 0 ?
                    <div>
                    <h2 className='sideTitle'> My Completed Hikes </h2>  
                     <Row className='trailsContainerRow'> {completedHikes.map(h => < Trail handleRemoveHike={this.props.handleRemoveHike} 
                                                            hike={this.props.myHikes.find(hike => hike.id === h.id)}
                                                            handlePatchHike={this.props.handlePatchHike} 
                                                            trail={h.trail} 
                                                            key={`hike${h.trail.id}`} /> ) }</Row>
                     </div>
                     : <NoCompletedHikes/>}
                 
                </div>
                <p>
                </p>
                <div>
                     {incompletedHikes.length > 0 ? 
                     <div>
                    <h2 className='sideTitle'>My Saved Hikes </h2> 
                     <Row className='trailsContainerRow'> { incompletedHikes.map(h => < Trail 
                                                        hike={this.props.myHikes.find(hike=> hike.id === h.id)}
                                                        handleRemoveHike={this.props.handleRemoveHike} 
                                                        handlePatchHike={this.props.handlePatchHike} 
                                                        myHikes={this.props.myHikes} 
                                                        trail={h.trail}
                                                        key={h.trail.id} /> )} </Row> 
                     </div>
                     : <NoSavedHikes/>}
                </div>
            </div>
        )
    }
}

export default MyHikesPage