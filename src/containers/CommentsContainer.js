import React from 'react'
import Comment from '../components/Comment'
import { Col } from 'antd';
import CommentForm from '../components/CommentForm'

const CommentsContainer = (props) => {

    return (
        <Col className='commentsContainer' >    
            {props.currentUser? <CommentForm trail={props.trail} postComment={props.postComment} /> :null }
            {props.trail.comments.length > 0? 
            <div>
            <h3>Comments</h3>
             {props.trail.comments.map(c => < Comment deleteComment={props.deleteComment} comment={c} currentUser={props.currentUser}/>)} </div>: null}
        </Col>
    )

}

export default CommentsContainer