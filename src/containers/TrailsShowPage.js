import React from 'react';
import TrailDetails from '../components/TrailDetails'
import CommentsContainer from './CommentsContainer'
import {Col} from 'antd'

class TrailsShowPage extends React.Component{

    
    
    render () {
        return this.props.trail? (
            <Col span={10} style={{margin: 'auto'}}> 
                <TrailDetails handleRemoveHike={this.props.handleRemoveHike} handleNewHike={this.props.handleNewHike} handlePatchHike={this.props.handlePatchHike} myHikes={this.props.myHikes} trail={this.props.trail}/>
                <CommentsContainer deleteComment={this.props.deleteComment} currentUser={this.props.currentUser} trail={this.props.trail} postComment={this.props.postComment} />
            </Col>
        ): null
 
    }
    
}

export default TrailsShowPage