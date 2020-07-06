import React from 'react'
import {Button} from 'antd'
import {Form} from 'react-bootstrap'

class CommentForm extends React.Component{
    constructor(){
        super()
        this.state={
            content: ''
        }
    }

    onCommentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        let obj = {
            content: this.state.content,
            trail_id: this.props.trail.id
        }
        this.props.postComment(obj)
        // not clearing the input for whatever reason...
        this.setState({
            content: ''
        })
    }

    render(){
        return (
        <Form   >
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Control style={{width:'100%'}}  onChange={this.onCommentChange} as="textarea" rows='4' placeholder="Wrtie a Comment!" value={this.state.content} />
                </Form.Group>
                <div className='right'>
                     <Button className={'btn-light'} onClick={this.onSubmit} >
            Submit Comment
            </Button>
                </div>
        </Form>
        )
    }
}

export default CommentForm