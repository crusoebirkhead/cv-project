import React from 'react'

export class InfoView extends React.Component {

    render() {
      return (
        <div className="infoView">
          <p>Name: {this.props.name}</p>
          <p>Email: {this.props.email}</p>
        </div>
      );
    }
  }