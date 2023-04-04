import React from 'react'
import {InfoContext} from "../contexts/InfoContext";
export class InfoView extends React.Component {

    render() {
      return (
        <InfoContext.Consumer>
          {({name, email}) => (
            <div className="infoView">
              <p>Name: {name}</p>
              <p>Email: {email}</p>
            </div>
          )}
        </InfoContext.Consumer>
      );
    }
  }
