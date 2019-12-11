import React from 'react';
import Header from './Header'
import { withRouter } from 'react-router-dom';

function WorkoutsView(props) {
  return (
    <div className="workouts-container">
      {/* <Header /> */}
      {props.workouts.map(workout => (
        <div
          key={workout.id}
          className="workout-card"
          onClick={(e) => {
            props.history.push(`/workouts/${workout.id}`);
            window.scrollTo(0, 0);
          }}>
          <img alt={workout.title} src={workout.image_url} />
          <h3 className='date-title'>{workout.title}</h3>
          <h3 className='date-title'>{workout.date}</h3>
        </div>
      ))}
    </div>
  )
}

export default withRouter(WorkoutsView)