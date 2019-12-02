# Progress Tracker

### Project Overview
An app that allows you to create and store workout logs

### Preface
So I'd describe my relationship with the gym to be fairly active.  I go more times than I don't in a given week.  However I never have anyway of recording my workout routines and using them as reference points for my next workout. This app solves that problem.

### Project Description

Progress Tracker is essentially a digital workout journal where you're able to store previous workout logs in a database and refer to them whenever you'd like.  It can show you the progress you've done over the last couple weeks, months or years. A stopwatch is also included. 

## Feature List:

* Auth - register, login, logout

* User workout logs (read, create, edit, delete)

* Stop watch

### Stretch Goals

* Include images or gifs for each exercise including a brief description of how to execute it. 

### Frameworks
* React.js
* Ruby on Rails

## MVP
* Full CRUD on workout logs
* Functioning backend with a database including two tables minimum, one of which has to take users with Auth
* Mobile responsive design

## Post MVP
* include images/gifs and a brief description for each exercise in the Exercises table of the database

## ERD

![ERD Diagram](https://i.imgur.com/jQjt5JH.png)

## Wireframes

![Main Page](https://i.imgur.com/9Z7RsJc.png)
![New Workout](https://i.imgur.com/hKGqeiU.png)
![Stop Watch](https://i.imgur.com/jHHXUU6.png)
![Old Logs](https://i.imgur.com/KgFFuDJ.png)

## Component Hierarchy 

* < Welcome />
* < RegisterForm />
* < LoginForm />
* < main >
  * < Header />
  * < NewLogForm />
  * < StopWatch />
  * < OldLogs />
  * < Footer />
* < /main >


## Estimated Time Table
| Name     | H |Estimated Time| Actual Time | 
| -------- |---|--------------|--------------
| Back End | H |    15 HRS    |     ?
| Front End| H |    30 HRS    |     ?
| CSS      | H |    2 MIN     |     ?

