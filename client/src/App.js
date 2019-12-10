import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'
import Header from './components/Header'
import WorkoutForm from './components/WorkoutForm'
// import Workout from './components/Workout'
import './App.css'

import {
  createWorkout,
  readAllWorkouts,
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
      workoutForm: {
        user_id: "",
        title: "",
        exercise: "",
        date: "",
        content: "",
        set_count: "",
        rep_count: "",
        weight_count: "",
        duration: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }
  
  // -------------- AUTH ------------------

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
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route
          exact path="/"
          render={() => (
            <Main />
            // teachers={this.state.teachers}
            // teacherForm={this.state.teacherForm}
            // handleFormChange={this.handleFormChange}
            // newTeacher={this.newTeacher} />
          )} />
        <Route exact path="/workouts/new" render={() => (
          <WorkoutForm />
        )} />
      </div>);
  }
}

export default withRouter(App);
