import React from 'react'
import { Tooltip, Card, Avatar, Col } from 'antd';
import { PlusCircleFilled, CheckCircleFilled, HeartOutlined, HeartTwoTone, CloseCircleOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import { Rate } from 'antd';
// import all_clear from 'hikes_frontend/assets/all_clear.png' 

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
      this.setState({value})
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

    // const getIcon = () =>{
        //     if (condition_status === "All Clear"){
        //         return 'hikes_frontend/assets/all_clear.png'} 
        // }   
        // we have to know if this is trail on the user's hike list and the data for that "hike"
            
    getActions = () => {
                const { value } = this.state;
                const thisHike = this.props.myHikes.find(hike => hike.trail.name === this.props.trail.name)
                if (thisHike){
                    if (thisHike.completed){
                        return ([
                            <span>
                                <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                            </span>,
                            <Tooltip title='remove from your hikes'>
                            <CloseCircleOutlined onClick={() => this.props.handleRemoveHike(thisHike)}/>
                            </Tooltip>
                         ])
                    } else {
                        return [<Tooltip title='already hiked?'>
                                    <CheckCircleFilled onClick={() => this.props.handlePatchHike(thisHike, {completed: true})} />
                                </Tooltip>,
                                <Tooltip title='remove from your hikes'>
                                 <CloseCircleOutlined onClick={() => this.props.handleRemoveHike(thisHike)}/>
                                </Tooltip>]
            }
        }else {
            return [
                <Tooltip title='want to hike'>
                    <PlusCircleFilled onClick={()=> this.props.handleNewHike(this.props.trail, false)} />
                  </Tooltip>,
                <Tooltip title='already hiked?'>
                  <CheckCircleFilled onClick={()=> this.props.handleNewHike(this.props.trail, true)}/>
                </Tooltip>
                ]
            }
            
        }

    render () {
        const {name, location, img_medium, id} = this.props.trail
        return(  
            <Col span={8}>
                <Card  
                    hoverable
                    style={{ width: 'auto' }}
                    cover={
                        // Link to works when you click on the image, not when you click on the name of the hike. 
                        <Link to={`trails/${id}`}>
                            <img
                                alt="example"
                                height={200}
                                width={400}
                                src={img_medium}
                                />
                        </Link>
                    }
                    actions={this.getActions()}
                    >
                        <Meta
                        // avatar={<img height={10} width={10} src={getIcon()}/>}
                        title={name}
                        description={location}
                        
                        />
                 </Card>
         </Col>
    )
    }
}

export default Trail 



