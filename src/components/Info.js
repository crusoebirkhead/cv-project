import React from 'react';
import {InfoView} from './InfoView'
import {InfoContext} from "../contexts/InfoContext";
import InfoForm from "./InfoForm";

export class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      handleInputChange: this.handleInputChange,
      handleSubmit: this.handleSubmit
    };
  }
  //updates state
  handleInputChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  //renders state on submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({submitted: true});
  };

  render() {
    return (
      <InfoContext.Provider value={this.state}>
        <InfoForm/>
        {this.state.submitted && (
          <InfoView/>
        )}
      </InfoContext.Provider>
    );
  }
}


