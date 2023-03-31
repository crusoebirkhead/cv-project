import React from 'react';


export class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

 
 

  render() {
    return (
      <div>
        <form className="Info">
          <label>
            Name:
            <input type="text" name="name"/>
          </label>
          <label>
            Email:
            <input type="email" name="email"/>
          </label>
        </form>
      </div>
    );
  }
}


