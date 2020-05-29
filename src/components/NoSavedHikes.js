import React from 'react'
import {Tooltip} from 'antd'

const NoSavedHikes = () => {
    return(<div>
        <h1>No saved hikes...</h1>
         <Tooltip title='Time for a walk!'><img alt='sad dog' width={600} src={'https://images.unsplash.com/photo-1516598540642-e8f40a09d939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80'}/></Tooltip>
      </div>)
}

export default NoSavedHikes

