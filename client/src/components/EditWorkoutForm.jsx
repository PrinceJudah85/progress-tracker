import React from 'react'

export default function EditWorkoutForm(props) {
  return (
    <div className="edit-screen">
      <div className='edit-window'>
        <h2>Edit Workout Form</h2>
        <form className='edit-form' onSubmit={(e) => {
          e.preventDefault();
          props.editWorkout(props.workout_id)
        }}>
          <p>Date:</p>
          <input
            type="date"
            name="date"
            value={props.formData.date}
            onChange={props.handleChange} />
          <p>Exercise:</p>
          <input
            type="string"
            name="exercise"
            value={props.formData.exercise}
            onChange={props.handleChange} />
          <p>Set Count:</p>
          <input
            type="integer"
            name="set_count"
            value={props.formData.set_count}
            onChange={props.handleChange} />
          <p>Rep Count:</p>
          <input
            type="string"
            name="rep_count"
            value={props.formData.rep_count}
            onChange={props.handleChange} />
          <p>Weight Count:</p>
          <input
            type="integer"
            name="weight_count"
            value={props.formData.weight_count}
            onChange={props.handleChange} />
          <p>Duration:</p>
          <input
            type="integer"
            name="duration"
            value={props.formData.duration}
            onChange={props.handleChange} />
          <p>Content:</p>
          <textarea
            type="text"
            name="content"
            value={props.formData.content}
            onChange={props.handleChange} />
          <br />
          <button className='edit-button'>Submit Edit</button>
        </form>
      </div>
    </div>
  )
}
