Rails.application.routes.draw do
  resources :follows
  resources :followers
  resources :users
  resources :comments
  resources :likes
  resources :ideas
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  delete "/follows/:follower_id/:followed_user_id", to: "follows#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
