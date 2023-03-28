import React from 'react'
export class Education extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };

  
    render() {
      return (
        <div>
          <form>
            <label>
              Company Name:
              <input type="text" name="companyName" onChange={this.handleInputChange} />
            </label>
            <label>
              Position:
              <input type="email" name="position" onChange={this.handleInputChange} />
            </label>
            <label>Job Tasks: 
            <textarea name="tasks" onChange={this.handleInputChange}>
               
            </textarea>
            </label>
          </form>
          <div>
            <p>Company Name: {this.state.companyName}</p>
            <p>Position: {this.state.position}</p>
          </div>
        </div>
      );
    }
  }




