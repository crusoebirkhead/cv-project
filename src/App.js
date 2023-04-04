import {Info} from './components/Info.js'
import {Education} from './components/Education.js'
import {Experience} from './components/Experience.js'
import React from "react";
import './styles.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      educationInstances: [],
      experienceInstances: []
    };
  }

  //assigns new key using state for adding Education component
  handleAddEducationInstance = () => {
    this.setState((prevState) => ({
      educationInstances: [...prevState.educationInstances, <Education key={prevState.educationInstances.length}/>],
    }));
  };

  //assigns new key using state for adding Experience component
  handleAddExperienceInstance = () => {
    this.setState((prevState) => ({
      experienceInstances: [...prevState.experienceInstances, <Experience key={prevState.experienceInstances.length}/>],
    }));
  };

  render() {
    return (
      <div className="appContainer">
        <div className="btnContainer">
          <button onClick={this.handleAddEducationInstance}>Add Education Instance</button>
          <button onClick={this.handleAddExperienceInstance}>Add Experience Instance</button>
        </div>
        <Info/>
        <div>
          <Education/>
          <label>{this.state.educationInstances}</label>
        </div>
        <div>
          <Experience/>
          <label>{this.state.experienceInstances}</label>
        </div>
      </div>
    )
  }
}

export default App;
