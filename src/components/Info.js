import React from 'react';

export class Info extends React.Component {
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
            Name:
            <input type="text" name="name" onChange={this.handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleInputChange} />
          </label>
        </form>
        <div>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
        </div>
      </div>
    );
  }
}


