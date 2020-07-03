import React from 'react'
import {Tooltip, Card, Row} from 'antd'
const { Meta } = Card;

const NoSavedHikes = () => {
    return(<Row className='trailsContainerRow'>
        
         <Card  
                    hoverable
                    style={{ width: 400 }}
                    cover={
                            <img
                                alt='sad dog'
                                height={200}
                                width={400}
                                src={'https://images.unsplash.com/photo-1516598540642-e8f40a09d939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80' }
                                />
                            }>
                                <Meta
                        title={"You haven't saved any hikes yet."}
                        style={{align: 'center'}}
                        /> 
                 </Card>
    
      
      </Row>)
}

export default NoSavedHikes

