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
        <div className='left-side'>
          <Link to='/workouts/new'><h2>New Workout</h2></Link>
        </div>
        <div className='right-side'>
          {/* <Link to='/stop-watch'>Stop Watch</Link> */}
          <Link to='workouts/all' > <h2>Workout Log</h2></Link>
        </div>
      </div >
    )
  }
}
export default Main;