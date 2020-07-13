import React, { Component } from 'react';
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 56.2558114,
            lng: 43.3155113
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude, lng: position.coords.longitude});
        });
    }

    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <Map
                    style={{ height: "100%", width: "100%", position: 'absolute'}}
                    zoom={12}
                    center={[this.state.lat, this.state.lng]}>
                    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <CircleMarker
                        center={[56.2558114, 43.3155113]}
                    />
                </Map>
            </div>
        );
    }
}

export default MapComponent;