import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'
import Header from './components/Header'
import WorkoutForm from './components/WorkoutForm'
import WorkoutsView from './components/WorkoutsView'
import ShowWorkout from './components/ShowWorkout'
import EditWorkoutForm from './components/EditWorkoutForm'
import './App.css'

import {
  // getImagesByWorkoutId,
  createWorkout,
  getWorkoutsByUserId,
  singleWorkout,
  updateWorkout,
  destroyWorkout,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workouts: [],
      formData: {
        date: "",
        title: "",
        exercise: "",
        set_count: "",
        rep_count: "",
        weight_count: "",
        duration: "",
        content: "",
        image_url: "https://i.imgur.com/th1LIte.png"
      },
      // images: [],
      // imageForm: {
      //   image_url: ""
      // },
      currentUser: null,
      authFormData: {
        username: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    await this.handleVerify();
    await this.getWorkouts();
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
    const user_id = this.state.currentUser.id
    // formData.user_id = user_id
    const response = await createWorkout(user_id, formData)
    console.log(response)
    this.props.history.push('/')
  }

  newWorkout = async (e) => {
    e.preventDefault();
    const workout = await createWorkout(this.state.workoutForm);
    this.setState(prevState => ({
      workouts: [...prevState.workouts, workout],
      formData: {
        date: "",
        title: "",
        exercise: "",
        set_count: "",
        rep_count: "",
        weight_count: "",
        duration: "",
        content: ""
      }
    }))
  }

  getWorkouts = async () => {
    if (this.state.currentUser) {
      console.log('hi')
      const workouts = await getWorkoutsByUserId(this.state.currentUser.id)
      this.setState({
        workouts
      })
    }
  }

  editWorkout = async (workoutId) => {
    const { formData } = this.state
    const updatedWorkout = await updateWorkout(workoutId, formData);
    this.setState(prevState => ({
      workouts: prevState.workouts.map(workout => {
        return workout.id === parseInt(workoutId) ? updatedWorkout : workout
      })
    }))
    this.props.history.push(`/workouts/${workoutId}`)

  }
  // POST MVP FUNCTION BELOW
  // getImages = async () => {
  //   if (this.state.currentUser) {
  //     const images = await getImagesByWorkoutId(this.state.workout.id)
  //   } else {
  //     this.setState({ images: [] })
  //   }
  // }

  setEditForm = async (workout) => {
    const {
      date,
      title,
      exercise,
      set_count,
      rep_count,
      weight_count,
      duration,
      content,
      image_url
    } = workout;
    this.setState({
      formData: {
        date,
        title,
        exercise,
        set_count,
        rep_count,
        weight_count,
        duration,
        content,
        image_url
      }
    });
    this.props.history.push(`/workouts/${workout.id}/edit`)
  }

  deleteWorkout = async (id) => {
    await destroyWorkout(id);
    this.setState(prevState => ({
      workouts: prevState.workouts.filter(workout => workout.id !== id)
    }))
    this.props.history.push('/workouts/all')
  }

  // ------------------- AUTH ------------------
  handleVerify = async () => {
    console.log('hi')
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }


  render() {
    return (
      <div className="App">
        <Header
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
          handleLoginButton={this.handleLoginButton}
        />

        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route exact path="/" render={() => (
          <Main />
        )}
        />

        <Route exact path="/workouts/all" render={() => (
          <WorkoutsView
            workouts={this.state.workouts}
            formData={this.state.formData}
          // Ask help to determine what other functions might need to get passed. 
          />)}
        />

        <Route exact path="/workouts/new" render={() => (
          <WorkoutForm
            handleChange={this.handleChange}
            formData={this.state.formData}
            handleSubmit={this.handleSubmit}
          />)}
        />

        <Route
          exact path="/workouts/:id"
          render={(props) => {
            // the variable below grabs the workout_id from the params and matches it with the idea from in state so that if the page gets refreshed you don't lose the id from params. 
            const { id } = props.match.params;
            const workout = this.state.workouts.find(workout => workout.id === parseInt(id));
            return <ShowWorkout
              id={id}
              workout={workout}
              setEditForm={this.setEditForm}
              deleteWorkout={this.deleteWorkout}
            />
          }}
        />

        <Route
          path='/workouts/:id/edit'
          render={(props) => {
            const { id } = props.match.params;
            return <EditWorkoutForm
              workout_id={id}
              handleChange={this.handleChange}
              editWorkout={this.editWorkout}
              formData={this.state.formData}
            />
          }} />
      </div>);
  }
}

export default withRouter(App);
