Rails.application.routes.draw do
  resources :images
  resources :workouts
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  scope module: 'admin' do
    resources :exercises, path: "exercises" 
  end

  resources :users 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :workouts do
      resources :exercises do
    end
  end
    # workouts can CRUD thru routines. Exercises is a table on it's own. Just used for storing data. 
  



end
