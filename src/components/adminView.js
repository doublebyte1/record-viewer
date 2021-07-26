import React from "react";
require("./adminView.css");

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      description: ""
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  /* Step 2 of the code */
  handleSubmit(e) {
    e.preventDefault();
    /* Step 2 */
    this.props.addProject({
      title: this.state.title,
      url: this.state.url,
      description: this.state.description
    });
    
    console.log("form button clicked!");
  }

  render() {
    return (
      <div>
        <form id="myform">
          <label>
            Project Title
            <input name="title" onChange={e => this.handleInputChange(e)} />
          </label>
          <label>
            Project URL
            <input name="url" onChange={e => this.handleInputChange(e)} />
          </label>
          <label>
            Project Description
            <textarea
              name="description"
              onChange={e => this.handleInputChange(e)}
            />
          </label>
        </form>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default AdminView;
