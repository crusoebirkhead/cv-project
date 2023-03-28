import { Info } from './components/Info.js'
import { Education } from './components/Education.js'
import { Experience } from './components/Experience.js'
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { educationInstances: [] };
  }

  //assigns new key using state 
  handleAddEducationInstance = () => {
    this.setState((prevState) => ({
      educationInstances: [...prevState.educationInstances, <Education key={prevState.educationInstances.length} />],
    }));
  };

  render() {
    return (
    <div> 
      <div>
        <button onClick={this.handleAddEducationInstance}>Add Education Instance</button>
        <h1>{this.state.educationInstances}</h1>
      </div>
      <Info />
      <Education />
      <Experience />
    </div>
    )
  }
   
}

export default App;
