import React from 'react'
import { withRouter } from 'react-router-dom'

export default function ShowWorkout(props) {
  return (
    <div className='parent-div'>
      {props.workout &&
        <div className='show-page'>
          <h2>{props.workout.title}</h2>
          <p ><span >{props.workout.date}</span></p>
          <p><span className="form-fields">{props.workout.exercise}</span></p>
          <p><span className="form-fields">{props.workout.set_count}</span></p>
          <p><span className="form-fields">{props.workout.rep_count}</span></p>
          <p><span className="form-fields">{props.workout.weight_count}</span></p>
          <p><span className="form-fields">{props.workout.duration}</span></p>
          <p><span className="form-fields">{props.workout.content}</span></p>
          <button className='show-button' onClick={() => props.setEditForm(props.workout)}>Edit</button>
          <button className='show-button' onClick={() => props.deleteWorkout(props.workout.id)}>Delete</button>
        </div>
      }
    </div>
  )
}
