import React from "react";
import FeatureSection from "./featureSection";
import "./userView.css";
import "./featureSection.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const baseUrl='http://ec2-3-65-14-187.eu-central-1.compute.amazonaws.com:5000';
const collection="obs2";
const limit=100;

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      title: "",
      address: "",
      url: "",
      filter:"",
      markers: []
    };
  }


  // Add a marker to the map, by clicking on it
  addMarker = (e) => {
    console.log("comes here");
    const {markers} = this.state
    markers.push(e.latlng)
    console.log(e.latlng);
    this.setState({markers})
  }  
  
  handleInputChange(event) {

    this.setState({
      filter: event.target.value
    });
  }

  getRecords(url) {
    fetch(url)
      .then(res => res.json())
      .then(newRecords => {
        // upon success, update tasks
        this.setState({ records: newRecords.features });
        this.setState({title: this.state.records[0].properties.title});
        this.setState({address: this.state.records[0].properties.ADDRESS});
        this.setState({url: this.state.records[0].properties.url});
        this.setState({recordCreated: this.state.records[0].properties['record-created']});
        console.log(this.state.records);
      })
      .catch(error => {
        // upon failure, show error message
      });

    
  }

  handleSubmit() {
    
      this.getRecords(this.state.filter != ''?
        `${baseUrl}/collections/${collection}/items?q=${this.state.filter}`:
        `${baseUrl}/collections/${collection}/items?limit=${limit}`);

    
  }


  componentDidMount() {
    this.getRecords(`${baseUrl}/collections/${collection}/items?limit=${limit}`);
  }

  /* step 3 */
  handleClick(record) {

    const latlng = {lat: record.properties.Lat, lng: record.properties.Long};
    console.log(latlng);

    const {markers} = this.state
    markers.push(latlng)
    this.setState({markers})
    let mapInst =  this.refs.map.leafletElement;
    mapInst.flyTo(latlng, 12);

    return this.setState({  
      title: record.properties.title,
      address: record.properties.ADDRESS,
      url: record.properties.url,
      recordCreated: record.properties['record-created']
    }); 

  }

  renderProjectItem() {

    //console.log(this.props.records.features);
    return this.state.records.map(record => {
      return (
        <div
          className="project-item"  key={record.title}
          onClick={() => {
            this.handleClick(record);
          }}
        >
          <img src={record.properties.url} alt={record.properties.title} />
          <h3>{record.properties.title}</h3>
          <p>{record.properties.ADDRESS}</p>
          <p>record-created: {record.properties['record-created']}</p>
        </div>
      );
    });
  }


  render() {
    return (

      <div> 

        <div className="featured-section">



          <div id="feature-block">

            {/* <img id="feature-img" src={this.state.url} alt={this.state.title} /> */}
            
            <Map ref='map' center={[41.38879, 2.15899]} zoom={15} onClick={this.addMarker}>
              <TileLayer
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
                attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {this.state.markers.map((position, idx) => 
              <Marker key={`marker-${idx}`} position={position}>
                <Popup>
                  <span>Hello world!</span>
                </Popup>
            </Marker>
              )}
          </Map>     
            
            
            
            
            
            <div id="right">
              <h2 id="feature-title">{this.state.title}</h2>
              <p id="feature-desc">{this.state.address}</p>
            </div>
          </div>
        </div>
        


        <div className="project-search">

          <div className="form-inline mb-3">

          <input type="text" className="form-control flex-primary-1" placeholder="" aria-label="" aria-describedby="basic-addon1" name="title" onChange={e => this.handleInputChange(e)}/>
          <div className="input-group-prepend">
              <button className="btn btn-primary ml-2" type="button" onClick={(e) => this.handleSubmit(e)}>Filter</button>
          </div>

          </div>
          
        </div>



        <div id="project-grid">{this.renderProjectItem()}</div>
      </div>
    );
  }
}

export default UserView;
