import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: ""
    }
  }

  render() {
    return (
      <div className='main-page' >
        <Header />
        <Link to='/workout/new'><h2>New Workout</h2></Link>
        {/* <Link to='/stop-watch'>Stop Watch</Link> */}
        <Link to='workout/all' > <h2>Workout Log</h2></Link>
      </div >
    )
  }
}
  export default Main;