Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users do
    resources :workouts do
      resources :images
  end
end
  # scope module: 'admin' do
  #   resources :exercises, path: "exercises" 
  # end

  get 'users/user_id/workouts', to: 'workouts#index' # see if you can add "as: 'workouts' "
end
