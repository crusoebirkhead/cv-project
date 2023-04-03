import React from 'react'
import { ExperienceView } from './ExperienceView'

export class Experience extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        companyName: '',
        position: '',
        tasks: '',
      };
    }
    //updates state
    handleInputChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };

    //renders state on submit
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      this.setState({ submitted: true });
    };
  
    render() {
      return (
        <div className="experienceContainer">
          <form className = "experience" onSubmit={this.handleSubmit}>
            <label>
              Company Name:
              <input type="text" name="companyName" onChange={this.handleInputChange} />
            </label>
            <label>
              Position:
              <input type="email" name="position" onChange={this.handleInputChange} />
            </label>
            <label>
              Job Tasks:
              <textarea name="tasks" onChange={this.handleInputChange}></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
          {this.state.submitted && (
            <ExperienceView
              companyName={this.state.companyName}
              position={this.state.position}
              tasks={this.state.tasks}
            />
          )}
        </div>
      );
    }
  }
  
  
  
  
  
  
