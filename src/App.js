import React from "react";
import AdminView from "./components/adminView";
import UserView from "./components/userView";
import Info from "./info.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { adminView: false, records: {}, projects: Info };
  }



  componentDidMount() {
    fetch("https://emotional.byteroad.net/collections/masked/items?f=json")
      .then(res => res.json())
      .then(newRecords => {
        // upon success, update tasks
        this.setState({ records: newRecords });
        console.log(newRecords);
      })
      .catch(error => {
        // upon failure, show error message
      });
  }

  render() {
    return (
      <div>
        {this.state.adminView ? <AdminView addProject={newProject => this.addProject(newProject)} /> : 
         <UserView records={this.state.records.features} projects={this.state.projects}/> }

      </div>
    );
  }
}
export default App;
