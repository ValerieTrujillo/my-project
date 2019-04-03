import axios from "axios";

class GoogleMapService {
  static getLocation(data, onSuccess, onError) {
    axios
      .post(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=AIzaSyAXw0EP_mDucWrgK01FKyJvo_PPWY2JhLM`,
        data,
        { "Access-Control-Allow-Origin": "http://localhost:52930" }
      )
      .then(onSuccess)
      .catch(onError);
  }
}

export default GoogleMapService;
