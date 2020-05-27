import React from 'react'
import { Input } from 'antd';

const { Search } = Input

const SearchBar = (props) => {

    return(
            <div>
                <Search
                placeholder="Search for a Trail"
                style={{ width: 200 }}
                value={props.searchTerm}
                onChange={(event)=> props.handleSearchTerm(event)}
                />
                <br />
                <br />
            </div>
    )
}

export default SearchBar

