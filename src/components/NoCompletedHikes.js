import React from 'react'
import {Tooltip} from 'antd'

const NoCompletedHikes = () => {
    return  <div>
            <h1>No completed hikes...</h1>
         <Tooltip title='Take me outside!!'><img alt='sad dog' width={600}  src={'https://images.unsplash.com/photo-1516383074327-ac4841225abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'}/></Tooltip>
    </div> 

}

export default NoCompletedHikes