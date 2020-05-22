import React from 'react';
import TrailsContainer from './TrailsContainer'


class TrailsPage extends React.Component{
    constructor(){
        super()
        this.state = {
            trails: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/trails')
        .then(resp => resp.json())
        .then(data => 
            this.setState({
                trails: data
            }))
    }

    render () {
        return (
            <div> 
                <h1>Trails</h1>
                < TrailsContainer trails={this.state.trails} />
            
            </div>
        )
    }
}

export default TrailsPage