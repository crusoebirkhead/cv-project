import React from 'react'


export class Experience extends React.Component {

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
              School Name:
              <input type="text" name="schoolName" onChange={this.handleInputChange} />
            </label>
            <label>
              Title of Study:
              <input type="email" name="titleStudy" onChange={this.handleInputChange} />
            </label>
            <label>
                Date of Study: 
                <input type="date" name="dateStudy" onChange={this.handleInputChange}/>
             </label>
          </form>
          <div>
            <p>School Name: {this.state.schoolName}</p>
            <p>Title of Study: {this.state.titleStudy}</p>
            <p>Date of Study: {this.state.dateStudy}</p>
          </div>
        </div>
      );
    }
  }
