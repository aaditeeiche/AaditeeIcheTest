import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="form-container">

        <form>
          <h1>Admission Form</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
