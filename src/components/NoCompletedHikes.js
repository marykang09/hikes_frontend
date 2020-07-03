import React from 'react'
import {Tooltip, Card, Row} from 'antd'
const { Meta } = Card;

const NoCompletedHikes = () => {
    return  <Row className='trailsContainerRow'>
        <Card  
                    hoverable
                    style={{ width: 400 }}
                    cover={
                            <img
                                alt='sad dog'
                                height={200}
                                width={400}
                                src={'https://images.unsplash.com/photo-1516383074327-ac4841225abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' }
                                />
                            }>
                                <Meta
                        title={"You haven't completed any hikes yet."}
                        style={{align: 'center'}}
                        /> 
                 </Card>
    </Row> 

}

export default NoCompletedHikes