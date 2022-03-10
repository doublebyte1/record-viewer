import React from "react";
import "./featureSection.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

/* step 3 */
class FeatureSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      title: this.props.title,
      description: this.props.description
    };
  }

  render() {
    return (
      <div className="featured-section">
        <div id="feature-block">

        <Map ref='map' center={[38.736946, -9.142685]}
              zoom={15}
              >
                <TileLayer
                  url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
                  attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
        </Map>


          {/* <img id="feature-img" src={this.props.url} alt={this.props.title} /> */}
          <div id="right">
            <h2 id="feature-title">{this.props.title}</h2>
            <p id="feature-desc">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureSection;
