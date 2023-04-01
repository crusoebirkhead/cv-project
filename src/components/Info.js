import React from 'react';
import { InfoView } from './InfoView'

export class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
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
        <form className="Info" onSubmit = {this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange = {this.handleInputChange}/>
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange = {this.handleInputChange}/>
          </label>
          <button type="submit">Submit</button>
        </form>
        {this.state.submitted && (
        <InfoView 
        name={this.state.name}
        email = {this.state.email}
        />
        )}
      </div>
        
    );
  }
}


