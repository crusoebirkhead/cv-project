import React from 'react'

export class EducationView extends React.Component {

    render() {
      return (
        <div>
          <p>School Name: {this.props.schoolName}</p>
          <p>Title of Study: {this.props.titleStudy}</p>
          <p>Date of Study: {this.props.dateStudy}</p>
        </div>
      );
    }
  } 