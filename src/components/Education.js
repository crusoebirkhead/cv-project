import React from 'react'
import { EducationView } from './EducationView'
export class Education extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        schoolName: '',
        titleStudy: '',
        dateStudy: ''
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
        <div>
          <form onSubmit = {this.handleSubmit}>
            <label>
              School Name:
              <input type="text" name="schoolName" onChange = {this.handleInputChange}/>
            </label>
            <label>
              Title of Study:
              <input type="text" name="titleStudy" onChange = {this.handleInputChange}/>
            </label>
            <label>
                Date of Study: 
                <input type="date" name="dateStudy" onChange = {this.handleInputChange}/>
             </label>
          </form>
          {this.state.submitted && (
          <EducationView 
            schoolName = {this.state.schoolName}
            titleStudy = {this.state.titleStudy}
            dateStudy = {this.state.dateStudy}
          />
          )}
        </div>
      );
    }
  }




