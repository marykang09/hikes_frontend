import React from 'react'
import Iframe from 'react-iframe'

const GoogleMaps = (props) => {
    let url = `https://www.google.com/maps/embed/v1/search?q=${props.latitude}%2C${props.longitude}&key=AIzaSyDw56t2Ne5vW5va_yaMLhS1U7cGZJU6YO0`
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


