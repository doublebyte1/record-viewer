import React from "react";
import FeatureSection from "./featureSection";
import "./userView.css";
import "./featureSection.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const baseUrl='https://emotional.byteroad.net';
const collection="masked_rec";
const limit=100;

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      title: "",
      description: "",
      contactPoint: "",
      type: "",
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
        this.setState({description: this.state.records[0].properties.description});
        this.setState({url: this.getAvatar()});
        this.setState({created: this.state.records[0].properties['created']});
        this.setState({contactPoint: this.state.records[0].properties.contactPoint});
        this.setState({type: this.state.records[0].properties.type});
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

    const latlng = {lat: record.geometry.coordinates[1], lng: record.geometry.coordinates[0]};
    console.log(latlng);

    const {markers} = this.state
    markers.push(latlng)
    this.setState({markers})
    let mapInst =  this.refs.map.leafletElement;
    mapInst.flyTo(latlng, 12);

    return this.setState({  
      title: record.properties.title,
      description: record.properties.description,
      url: this.getAvatar(),
      created: record.properties['created'],
      contactPoint: record.properties['contactPoint'],
      type: record.properties['type'],      
    }); 

  }

  getAvatar(){


    const rnd=Math.random();
    if (rnd < 0.2) {
      return "https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png";
    } else if (rnd < 0.4) {
      return "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png";
    } else if (rnd < 0.6) {
      return "https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png";
    } else if (rnd < 0.8) {
      return "https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png";
    } else {
      return "https://upload.wikimedia.org/wikipedia/en/a/ab/Wendy_South_Park.png";
    }
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
          <img src={this.getAvatar()} alt={record.properties.title} />
          <h3>{record.properties.title}</h3>
          <p>description: {record.properties.description}</p>
          <p>contactPoint: {record.properties.contactPoint}</p>
          <p>created: {record.properties['created']}</p>
          <p>type: {record.properties['type']}</p>
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
            
            <Map ref='map' center={[38.736946, -9.142685]} zoom={11} onClick={this.addMarker}>
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
              <p id="feature-desc">{this.state.description}</p>
              <p id="feature-created">{this.state.created}</p>
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
