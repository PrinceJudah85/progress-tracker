import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        user_id: "",
        date: "",
        title: "",
        exercise: "",
        set_count: "",
        rep_count: "",
        weight_count: "",
        duration: "",
        content: ""
      }
    }
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = this.state.formData
    const response = await axios.post(`http://localhost:3000/workouts`, formData)
    console.log(response)
    this.props.history.push('/')
  }

  render() {
    const { date, title, exercise, content, set_count, rep_count, weight_count, duration } = this.state.formData

    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="date" placeholder="enter date" value={date} />
        <input onChange={this.handleChange} name="title" placeholder="title of workout" value={title} />
        <input onChange={this.handleChange} name="exercise" placeholder="name of exercise" value={exercise} />
        <input onChange={this.handleChange} name="set_count" placeholder="number of sets" value={set_count} />
        <input onChange={this.handleChange} name="rep_count" placeholder="number of reps" value={rep_count} />
        <input onChange={this.handleChange} name="weight_count" placeholder="amount of weight" value={weight_count} />
        <input onChange={this.handleChange} name="duration" placeholder="amount of weight" value={duration} />
        <textarea onChange={this.handleChange} name="content" placeholder="if reps and sets have different values, enter them here" value={content} />
        <button>Add Workout</button>
      </form>
    )
  }
}

export default withRouter(WorkoutForm)