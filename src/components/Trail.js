import React from 'react'
import { Tooltip, Card, Avatar, Col, Rate } from 'antd';
import { PlusCircleFilled, CheckCircleFilled, HeartOutlined, HeartTwoTone, CloseCircleOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import clear from '../assets/clear.png'


const { Meta } = Card;

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Trail extends React.Component {

 constructor(){
     super()
     this.state = {
        value: null
     }
 }

  handleChange = value => {
        const thisHike = this.props.myHikes.find(hike => hike.trail.name === this.props.trail.name)
    //   this.setState({value})
      this.props.handlePatchHike(thisHike, {rating: value})
  };

  componentDidMount(){
    const thisHike = this.props.myHikes.find(hike => hike.trail.name === this.props.trail.name)
    if (thisHike){
        this.setState({
            value: thisHike.rating
        })
    }
  }

        // we have to know if this is trail on the user's hike list and the data for that "hike"
            
    getActions = () => {
                const { value } = this.state;
                const thisHike = this.props.myHikes.find(hike => hike.trail.name === this.props.trail.name)
            
            if (thisHike){
                    let array = [<Tooltip title='remove from your hikes'> <CloseCircleOutlined onClick={() => this.props.handleRemoveHike(thisHike)}/> </Tooltip>]
                    //remove hike button is part of initial array if thisHike exists
                    
                    //if hike is completed, show the rating, else show the -completed- button
                    thisHike.completed? array.unshift(<span>
                                                    <Rate tooltips={desc} onChange={this.handleChange} value={thisHike.rating} />
                                                     {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                                    </span>):
                                                    array.unshift(  <Tooltip title='already hiked?'>
                                                                       <CheckCircleFilled onClick={() => this.props.handlePatchHike(thisHike, {completed: true})} />
                                                                 </Tooltip>)
                    //if hike is already favorited, show -unfavorite- button, else, show the favorite button
                    thisHike.favorite? array.unshift( <Tooltip title='unfavorite this hike'>
                                                     <HeartTwoTone twoToneColor="#eb2f96" onClick={() => this.props.handlePatchHike(thisHike, {favorite: false})}/>
                                                 </Tooltip>): 
                                                array.unshift(<Tooltip title='favorite this hike'>
                                                    <HeartOutlined onClick={() => this.props.handlePatchHike(thisHike, {favorite: true})} />
                                                 </Tooltip>)
                    return(array)  

            }  
        else{
            return [
                <Tooltip title='favorite this hike'>
                    <HeartOutlined onClick={()=> this.props.handleNewHike({trail_id: this.props.trail.id, favorite: true})} />
                  </Tooltip>,
                 <Tooltip title='want to hike'>
                 <PlusCircleFilled onClick={()=> this.props.handleNewHike({trail_id: this.props.trail.id})} />
               </Tooltip>,
                <Tooltip title='already hiked?'>
                  <CheckCircleFilled onClick={()=> this.props.handleNewHike({trail_id: this.props.trail.id, completed: true})}/>
                </Tooltip>
                ]
            } 
        }

    render () {
        const {name, location, img_medium, id, condition_status} = this.props.trail
        return(  
            <Col span={8}>
                <Card  
                    hoverable
                    style={{ width: 400 }}
                    cover={
                        // Link to works when you click on the image, not when you click on the name of the hike. 
                        <Link to={`trails/${id}`}>
                            <img
                                alt="trail image"
                                height={200}
                                width={400}
                                src={img_medium}
                                />
                        </Link>
                    }
                    actions={this.getActions()}
                    >
                        <Link to={`trails/${id}`}><Meta
                        avatar= {condition_status === 'All Clear'? <Tooltip title={`Condition: all clear!}`}><img height={30} width={50} style={{position: "absolute",top: 0, left:-1 }}src={clear}/></Tooltip>  : null }
                        title={name}
                        description={location}
                        style={{align: 'center'}}
                        /> </Link>
                 </Card>
            </Col>
    )
     }
}

export default Trail 



