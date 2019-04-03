import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import GoogleMapService from "../../services/GoogleMapService";
import { compose, withProps } from "recompose";
// import Geolocation from "./Geolocation";

const style = {
  width: "100%",
  height: "100%"
};
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXw0EP_mDucWrgK01FKyJvo_PPWY2JhLM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    
    <GoogleMap defaultZoom={1} center={{ lat: props.lat, lng: props.lng }}>
      {props.isMarkerShown && (
        <Marker
          position={{ lat: props.lat, lng: props.lng }}
          onClick={props.onMarkerClick}
        />
      )}
      <Marker
        title={"Safaris in Namibia"}
        name={"SOMA"}
        position={{ lat: 22.9576, lng: 18.4904 }}
      />
      <Marker
        title={"Explore the Cliffs Of Moher"}
        name={"SOMA"}
        position={{ lat: 52.9715, lng: 9.4309 }}
      />
      <Marker
        title={"French countryside vinyards"}
        name={"SOMA"}
        position={{ lat: 44.0145, lng: 6.2116 }}
      />
      <Marker
        title={"Good times at Railey Beach!"}
        name={"SOMA"}
        position={{ lat: 8.012, lng: 98.8373 }}
      />
    </GoogleMap>
  );
});

class MapContainer extends React.PureComponent {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
      lat: 33.6846,
      lng: 117.8265,
      zoom: 20,
      address: ""
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 1000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  onChange = resp => {
    console.log(resp.target.value, "========onChange===============");
    this.setState({
      address: resp.target.value
    });
  };

  onClick = e => {
    console.log(this.state.address, "=============Target=============");
    GoogleMapService.getLocation(
      this.state.address,
      this.onGetLocSuccess,
      this.onGetLocError
    );
  };

  onGetLocSuccess = resp => {
    console.log(resp);
    this.setState({
      lat: resp.data.results[0].geometry.location.lat,
      lng: resp.data.results[0].geometry.location.lng
    });
  };

  onGetLocError = error => {
    console.log(error);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  getGeolocation = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  };

  render() {
    return (
      
      <div>
        <div style={{ width: "100%" }}>
          <button
            style={{ width: "50%" }}
            size="md"
            className="btn btn-outline-primary"
            onClick={this.onClick}
          >
            Search
          </button>
          <br />
          <input
            size="md"
            type="text"
            style={{ width: "80%" }}
            name="address"
            id="address"
            placeholder="Enter Destination"
            onChange={this.onChange}
          />
        </div>
        <MyMapComponent
          center={{ lat: this.state.lat, lng: this.state.lng }}
          position={{ lat: this.state.lat, lng: this.state.lng }}
          lat={this.state.lat}
          lng={this.state.lng}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
        {/* <Geolocation /> */}
      </div>

    );
  }
}
export default MapContainer;
