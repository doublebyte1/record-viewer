import React from "react";
import UserView from "./components/userView";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records: {}};
  }



  componentDidMount() {
    fetch("https://emotional.byteroad.net/collections/ec_catalog/items?f=json")
      .then(res => res.json())
      .then(newRecords => {
        // upon success, update tasks
        this.setState({ records: newRecords });
        //console.log(newRecords);
      })
      .catch(error => {
        // upon failure, show error message
      });
  }

  render() {
    return (
      <div>
         <UserView records={this.state.records.features} projects={this.state.projects}/>
      </div>
    );
  }
}
export default App;
