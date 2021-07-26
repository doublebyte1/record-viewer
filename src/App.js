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
    fetch("http://ec2-3-65-14-187.eu-central-1.compute.amazonaws.com:5000/collections/obs/items")
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

/*
  addProject(newProject) {
    this.setState({
      projects: [...this.state.projects, newProject]
    });
  }

  changeUser(isAdmin) {
    this.setState({ adminView: isAdmin });
  }
*/
  render() {
    return (
      <div>
        {/* Step 1 */}
{/*         <button onClick={() => this.changeUser(true)} className={this.state.adminView? 'button-clicked': 'button-normal'}>ADMIN</button>
        <button onClick={() => this.changeUser(false)} className={!this.state.adminView? 'button-clicked': 'button-normal'}>USER</button>
 */}        
{/* Step 1 */}
        {this.state.adminView ? <AdminView addProject={newProject => this.addProject(newProject)} /> : 
         <UserView records={this.state.records.features} projects={this.state.projects}/> }

      </div>
    );
  }
}
export default App;
