import React from "react";
import {InfoContext} from "../contexts/InfoContext";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InfoContext.Consumer>
        {({handleInputChange, handleSubmit}) => {
          return (
            <form className="info" onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" onChange={handleInputChange}/>
              </label>
              <label>
                Email:
                <input type="email" name="email" onChange={handleInputChange}/>
              </label>
              <button className="sub" type="submit">Submit</button>
            </form>
          );
        }}
      </InfoContext.Consumer>
    );
  }
}

export default InfoForm;
