# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create ([
  {
    username:'admin',
    password:'123456'
  },
  {
    username:'princejudah',
    password:'dinosaurs'
  }
])
workouts = Workout.create ([
  {
    id: 1,
    title: 'Test1',
    date: '12/05/2019',
    exercise:'push-ups',
    set_count: 3,
    rep_count: 10,
    content: "test for bodyweight",  
    image_url:"https://library.kissclipart.com/20180903/iw/kissclipart-interactive-whiteboard-clipart-paper-notebook-pens-6bee7fa7d87b3919.jpg", 
    user_id: 1
  },
  {
    id: 2,
    title: 'Test2',
    date: '12/04/2019',
    exercise: "bench-press",
    set_count: 3,
    rep_count: 10,
    weight_count: 150,
    content: "Test for weight-training",
    image_url:"https://library.kissclipart.com/20180903/iw/kissclipart-interactive-whiteboard-clipart-paper-notebook-pens-6bee7fa7d87b3919.jpg",
    user_id: 2
  },
  {
    id: 3,
    title: 'Test3',
    date: '12/03/2019',
    exercise: "running",
    duration: 30,
    content: "Test for Cardio",
    image_url:"https://library.kissclipart.com/20180903/iw/kissclipart-interactive-whiteboard-clipart-paper-notebook-pens-6bee7fa7d87b3919.jpg",
    user_id: 1
  },
])

images = Image.create ([
  {
    workout_id: 1,
    image_url:"https://videohive.img.customer.envatousercontent.com/files/d79607c5-fc48-48de-b545-933bac57654a/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=bb8f3b7d984c95acc3cfb8c335a78871" 
  },
  {
    workout_id: 2,
    image_url:"https://www.t-nation.com/img/photos/2012/12-758-03/bench-press.jpg" 
  },
  {
    workout_id: 3,
    image_url:"http://pluspng.com/img-png/running-png-hd-man-running-fast-clip-buckle-free-hd-man-running-fast-run-start-of-a-race-free-png-image-650.jpg" 
  }
])

