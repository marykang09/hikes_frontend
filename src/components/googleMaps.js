import React from 'react'
import Iframe from 'react-iframe'

// const ck = require('ckey');

const GoogleMaps = (props) => {
    let apiKey = process.env.REACT_APP_API_KEY
    let url = `https://www.google.com/maps/embed/v1/search?q=${props.latitude}%2C${props.longitude}&key=${apiKey}`
    return (
        <Iframe url={url}
        width="400px"
        height="300px"
        id="map"
        className="myClassname"
        display="initial"
        position="relative"/>
    )
}

export default GoogleMaps


