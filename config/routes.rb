Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get "/items", to: "items#index"
  get "/items/:id", to: "items#show"

  get "/cart", to "cart#show"
  post "/cart/add"
  post "/cart/remove"




end
