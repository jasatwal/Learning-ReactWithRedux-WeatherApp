import React, { Component } from "react";

export default class GoogleMap extends Component {
    // Stops React re-rendering this component. Google
    // Maps is incharge of rendering.
    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        this.map.panTo({ lat: nextProps.lat, lng: nextProps.lon });
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}