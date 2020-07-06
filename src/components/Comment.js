import React from 'react'
import Trail from '../components/Trail'
import { Card, Button } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

const Comment = (props) => {

    return (
        <Card className='commentCard'>      
                @{props.comment.user.username}: "{props.comment.content}"
                {props.currentUser && props.currentUser.id === props.comment.user.id?<div className='right'><Button onClick={() => props.deleteComment(props.comment.id, props.comment.trail_id)} className='btn-primary'>Delete</Button></div>  :null }
            </Card>
    )

}

export default Comment