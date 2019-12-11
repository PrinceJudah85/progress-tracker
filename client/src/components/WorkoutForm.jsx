import React from 'react';
import { withRouter } from 'react-router-dom';

function WorkoutForm(props) {
  const { date, title, exercise, content, set_count, rep_count, weight_count, duration } = props.formData

  return (
    <div className='workout-form-container'>
      <h2>New Workout Form</h2>
      <form className='workout-form' onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          type='date'
          name="date"
          placeholder="Enter Date"
          value={date}
        />
        <input
          onChange={props.handleChange}
          type='text'
          name="title"
          placeholder="Title of Workout"
          value={title}
        />
        <input
          onChange={props.handleChange}
          type='text'
          name="exercise"
          placeholder="Name of Exercise"
          value={exercise}
        />
        <input
          onChange={props.handleChange}
          type='text'
          name="set_count"
          placeholder="Number of Sets"
          value={set_count}
        />
        <input
          onChange={props.handleChange}
          type='text'
          name="rep_count"
          placeholder="Number of Reps"
          value={rep_count}
        />
        <input
          onChange={props.handleChange}
          type='text'
          name="weight_count"
          placeholder="Amount of weight"
          value={weight_count}
        />
        <input
          onChange={props.handleChange}
          type='text'
          name="duration"
          placeholder="Enter Duration"
          value={duration}
        />
        <textarea
          onChange={props.handleChange}
          type='text'
          name="content"
          placeholder="If reps and sets have different values, enter them here"
          value={content}
        />

        <button id="form-button">Add Workout</button>
      </form>
    </div>
  )
}

export default withRouter(WorkoutForm)