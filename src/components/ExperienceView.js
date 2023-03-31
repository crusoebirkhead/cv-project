import React from 'react'

export class ExperienceView extends React.Component {

    render() {
      return (
        <div>
          <p>Company Name: {this.props.companyName}</p>
          <p>Position: {this.props.position}</p>
          <p>Job Tasks: {this.props.tasks}</p>
        </div>
      );
    }
  }